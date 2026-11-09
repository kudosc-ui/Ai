const CACHE_NAME = 'voyageai-cache-v1';
const ASSETS = [
  'index.html',
  '404.html',
  'style.css',
  'script.js',
  'manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request)).catch(() => caches.match('404.html'))
  );
});