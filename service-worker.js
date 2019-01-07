/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4f03e6bd0ad141fc3e9daaa21f66322d"
  },
  {
    "url": "advance/index.html",
    "revision": "1339a6795d7fbfc9cc8de30e914f5b04"
  },
  {
    "url": "api/index.html",
    "revision": "2fafb488c21e0cdb623f4147dc65e9d1"
  },
  {
    "url": "assets/css/0.styles.dc4c3345.css",
    "revision": "bb5954ddf80f10f50f428cae2b350b5f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.7e6a000b.js",
    "revision": "98ffa857879703434974c41708028f2c"
  },
  {
    "url": "assets/js/3.40b2f129.js",
    "revision": "4586b30296de41eccf3be78c644ca9ad"
  },
  {
    "url": "assets/js/4.00db64c5.js",
    "revision": "311391474df177086e205dbf8ac5681b"
  },
  {
    "url": "assets/js/5.5d5591ab.js",
    "revision": "492c4a514aa4832b5be5696ed475a0b6"
  },
  {
    "url": "assets/js/6.86ef3b14.js",
    "revision": "77b5ffd35f82c67061504b3c9e8793f7"
  },
  {
    "url": "assets/js/7.c0edf9d2.js",
    "revision": "60cecaae875b0dd115c2a5e20f226017"
  },
  {
    "url": "assets/js/8.3d534570.js",
    "revision": "08ca91b2e1033c741dc4a03483028a9d"
  },
  {
    "url": "assets/js/app.594d50d2.js",
    "revision": "a55e5bda4a63273b8d0b7af2fd0c7715"
  },
  {
    "url": "images/vuepress/1.png",
    "revision": "43e574129cf77a73115386504d72a293"
  },
  {
    "url": "images/vuepress/2.png",
    "revision": "99b9cb6066adf8892e4670cea7bbb11c"
  },
  {
    "url": "images/vuepress/3.png",
    "revision": "211c4c4931901c171802c1c36115ec40"
  },
  {
    "url": "index.html",
    "revision": "07f0e4d2159fbe4720e00475f5dcbd4a"
  },
  {
    "url": "others/vuepress.html",
    "revision": "4095b45ec95cd7100b7708ce43611dc3"
  },
  {
    "url": "primer/index.html",
    "revision": "19dad8e19a7d2a78efd752cab11afd40"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
