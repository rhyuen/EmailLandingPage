"use strict";

const cacheName = "MailGenr8r";
const version = "1.0.0";
const filesToCache = [
  "/",
  "/views/",
  "/views/js/index.js",
  "/views/css/index.css",
  "/views/css/confirm/css",
  "/views/index.hbs",
  "/views/confirm.hbs",
  "/manifest.json",
  "/views/layouts/layout.hbs",
  "/emaillander.ico",
  "/ry.png",
  "/images/fw2.jpg",
  "/images/icon_32x32.png",
  "/images/icon_64x64.png",
  "/images/icon_128x128.png",
  "/images/icon_256x256.png",
  "/images/icon_512x512.png",
  "/bower_components/validator/validator.js"
];

self.addEventListener("install", (event) => {
  console.log("Service Worker install");
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(filesToCache);
    }).catch((err) => {
      if(err)
        console.log(err);
    })
  );
});

self.addEventListener("activate", (event) => {
  console.log("[ServiceWorker] activate");
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if(key !== cacheName){
          console.log("ServiceWorker removing old cache" + key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  console.log("[ServiceWorker] fetch" + event.request.url);
  event.respondWith(
    caches.match(event.request).then((res) => {
      return res || fetch(event.request);
    }).catch((err) => {
      if(err)
        console.log(err);
    })
  );
});
