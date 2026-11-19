// Cache dell'interfaccia: consente di riaprire l'app offline dopo la prima visita online.
const CACHE_NAME = "vela-tactics-shell-v2";
const APP_FILES = [
  "./", "./index.html", "./css.css", "./manifest.webmanifest",
  "./js/app.js", "./js/categories.js", "./js/storage.js", "./js/backup.js", "./js/ui.js",
  "./icons/icon.svg", "./icons/icon-192.png", "./icons/icon-512.png"
];
self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_FILES)));
  self.skipWaiting();
});
self.addEventListener("activate", event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(
    keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
  )));
  self.clients.claim();
});
self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request)));
});
