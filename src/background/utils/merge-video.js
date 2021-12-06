import { deepCopy } from '#/common/object';
const { createFFmpeg, fetchFile } = require('@ffmpeg/ffmpeg');
const { chrome } = global;

let ffmpeg;
async function load() {
  if (ffmpeg) return ffmpeg;
  ffmpeg = createFFmpeg({
    corePath: '/public/lib/ffmpeg-core.js',
    log: false,
  });
  await ffmpeg.load();
  console.info('ff loaded', { ffmpeg });
  return ffmpeg;
}

const merge = async (video, audio) => {
  // console.info({ video, audio });
  ffmpeg.FS('writeFile', 'video.mp4', await fetchFile(video));
  ffmpeg.FS('writeFile', 'audio.mp3', await fetchFile(audio));
  await ffmpeg.run('-i', 'video.mp4', '-i', 'audio.mp3', '-c', 'copy', 'out.mp4');
  return ffmpeg.FS('readFile', 'out.mp4');
};

async function get(opts, httpRequest, progress) {
  return new Promise((resolve, reject) => {
    opts.requests[opts.id] = {
      id: opts.id,
      tabId: opts.src.tab.id,
      eventsToNotify: ['error', 'load', 'progress'],
      xhr: new XMLHttpRequest(),
    };
    opts.type = 'download';
    opts.fileName = null;
    opts.data = [];
    httpRequest(opts, opts.src, res => {
      // console.info('httpRequest', res);
      if (res.type === 'progress') {
        // console.info('httpRequest', res.data?.loaded, res.data?.total);
        progress(res.data?.loaded, res.data?.total);
      } else if (res.type === 'load') {
        resolve(res.data);
      } else if (res.type === 'loadend') {
        reject();
      }
    });
  });
}

export async function mergeVideo(opts, httpRequest) {
  // console.info('mergeVideo', opts);
  const progress = {
    video: { loaded: 0, total: 0 },
    audio: { loaded: 0, total: 0 },
  };

  const onprogress = (pp, loaded, total) => {
    if (loaded && total) Object.assign(pp, { loaded, total });
    const _loaded = progress.video.loaded + progress.audio.loaded;
    const _total = progress.video.total + progress.audio.total;
    if (_loaded && _total) opts.onprogress(_loaded, _total + 1);
  };

  const preloads = [];
  preloads.push(load());

  const videoOpts = deepCopy(opts);
  videoOpts.requests = opts.requests;
  videoOpts.id = `${opts.id}.video`;
  preloads.push(get(videoOpts, httpRequest, (loaded, total) => {
    onprogress(progress.video, loaded, total);
  }));

  const audioOpts = deepCopy(opts);
  audioOpts.requests = opts.requests;
  audioOpts.url = opts.data[0];
  audioOpts.id = `${opts.id}.audio`;
  preloads.push(get(audioOpts, httpRequest, (loaded, total) => {
    onprogress(progress.audio, loaded, total);
  }));

  const vals = await Promise.all(preloads);
  if (!vals[1] || !vals[2]) {
    // fail
    opts.onerror();
    return;
  }

  // console.info({ vals });
  const out = await merge(vals[1], vals[2]);
  // console.info('out', { out });
  const url = URL.createObjectURL(new Blob([out], { type : 'video/mp4' }));
  // console.info('res', { url, filename: opts.fileName });
  chrome.downloads.download({
    url,
    filename: opts.fileName,
  }, downloadId => {
    // console.info(downloadId);
    opts.onload(downloadId);
    URL.revokeObjectURL(url);
  });
}
