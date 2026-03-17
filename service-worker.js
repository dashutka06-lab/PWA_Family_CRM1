
const CACHE_NAME = 'family-center-v1';
const urlsToCache = [
  './',
  './index.html',
  './kristina.html',
  './samuil.html',
  './pollyanna.html',
  './mama.html',
  './styles.css',
  './app.js',
  './manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
