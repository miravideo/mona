/* eslint-disable */
/**
 * credits
 * https://github.com/Momo707577045/m3u8-downloader
 * https://github.com/shellvon/zh-downloader
 */

import jBinary from 'jbinary';
import MPEGTS from 'mpegts_to_mp4/mpegts_to_mp4/mpegts';
import mpegts_to_mp4 from 'mpegts_to_mp4/mpegts_to_mp4/index'; // eslint-disable-line camelcase
import { AESDecryptor } from './aes-decryptor';

let tsList = [];
let statusList = [];
let mediaFileList = [];

// AES 视频解密配置
const AES = {
  method: '', // 加密算法
  uri: '', // key 所在文件路径
  iv: '', // 偏移值
  key: '', // 秘钥
  decryptor: null, // 解码器对象
  stringToBuffer: function (str) {
    return new TextEncoder().encode(str)
  },
}

export const downloadM3u8 = function (opts) {
  // clear
  tsList = [];
  statusList = [];
  mediaFileList = [];

  const m3u8 = opts.data[0];
  const baseUrl = opts.url;
  let limit = 5;
  m3u8.split('\n').forEach((line) => {
    if (limit > 0 && tsList.length >= limit) return;
    if (line.toLowerCase().indexOf('.ts') > -1) {
      tsList.push(tsUrl(line, baseUrl));
      statusList.push({
        title: line,
        status: 'init',
      })
    }
  })

  // console.log('tsList', tsList);

  if (m3u8.indexOf('#EXT-X-KEY') > -1) {
    // 视频 AES 加密
    AES.method = (m3u8.match(/(.*METHOD=([^,\s]+))/) || ['', '', ''])[2]
    AES.uri = (m3u8.match(/(.*URI="([^"]+))"/) || ['', '', ''])[2]
    AES.uri = tsUrl(AES.uri, baseUrl)
    AES.iv = (m3u8.match(/(.*IV=([^,\s]+))/) || ['', '', ''])[2]
    AES.iv = AES.iv ? AES.stringToBuffer(AES.iv) : ''

    // 先下载秘钥
    getAES(() => {
      downloadTS(opts);
    });
  } else if (tsList.length > 0) {
    // 如果视频没加密，则直接下载片段
    downloadTS(opts);
  } else {
    console.info('empty m3u8!')
  }
}

const getAES = function (callback) {
  ajax({
    url: AES.uri,
    success: (key) => {
      AES.key = key
      AES.decryptor = new AESDecryptor()
      AES.decryptor.constructor()
      AES.decryptor.expandKey(AES.key);
      callback()
    },
    fail: () => {
      console.info('视频已进行定制化加密')
    },
  })
}

const tsUrl = function (tsUri, baseURL) {
  if (tsUri.startsWith('http')) {
    return tsUri
  } else if (tsUri[0] === '/') {
    let domain = baseURL.split('/')
    return domain[0] + '//' + domain[2] + tsUri
  } else {
    let domain = baseURL.split('/')
    domain.pop()
    return domain.join('/') + '/' + tsUri
  }
}

// ts 片段的 AES 解码
const decryptTs = function (data, index) {
  let iv = AES.iv || new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, index])
  return AES.decryptor.decrypt(data, 0, iv.buffer || iv, true)
}

// 下载分片
const downloadTS = function (opts) {
  let index = 0;
  let retry = 0;
  let download = () => {
    const i = index;
    index++;
    if (i >= tsList.length) {
      // all succ
      const procList = statusList.filter(s => ['succ', 'loading'].includes(s.status));
      if (procList.length === tsList.length) {
        return;
      }

      if (retry < 5) {
        // retry again
        retry ++;
        index = 0;
        setTimeout(() => download(), 1000);
        console.log('retry', retry, procList.length)
        return;
      }
    }

    console.log('download', i);
    if (statusList[i] && ['error', 'init'].includes(statusList[i].status)) {
      statusList[i].status = 'loading'
      ajax({
        url: tsList[i],
        success: (data) => {
          statusList[i].status = 'succ'
          dealTS(data, i, opts, () => {
            opts.onprogress(mediaFileList.length / tsList.length)
            download()
          })
        },
        fail: (e) => {
          // let err = e.statusText
          console.log({ e, i });
          // todo: retry
          statusList[i].status = 'error'
          download();
        }
      })
    } else { // 跳过已经成功的片段
      download()
    }
  }

  // 并行 N线程下载
  for (let ii = 0; ii < 3; ii++) {
    download()
  }
}

const mp4ByJbinary = (dataChunks, callback) => {
  const blob = new Blob(dataChunks.map(data => new Uint8Array(data)), { type: 'video/mp2t' });
  jBinary.load(blob, MPEGTS, (err, mpegts) => {
    if (err) console.log({ err });
    const start = new Date().getTime();
    const mp4Obj = mpegts_to_mp4(mpegts);
    console.log(`Converted finished, time elapsed: ${new Date().getTime() - start}ms`);
    const data = { downloadLink: mp4Obj.toURI('video/mp4') };
    callback(data);
  });
};

// 处理 ts 片段，AES 解密、mp4 转码
const dealTS = function (rawData, index, opts, callback) {
  const data = AES.uri ? decryptTs(rawData, index) : rawData
  mediaFileList[index] = data;
  if (mediaFileList.filter(m => m || false).length === tsList.length) {
    mp4ByJbinary(mediaFileList, res => {
      chrome.downloads.download({
        url: res.downloadLink,
        filename: opts.fileName,
      }, downloadId => {
        opts.onload()
      });
    })
  }
  callback && callback()
}

const ajax = function (options) {
  options = options || {};
  let xhr = new XMLHttpRequest();
  xhr.responseType = 'arraybuffer';

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      let status = xhr.status;
      if (status >= 200 && status < 300) {
        options.success && options.success(xhr.response);
      } else {
        options.fail && options.fail(status);
      }
    }
  };

  xhr.open("GET", options.url, true);
  xhr.send(null);
}