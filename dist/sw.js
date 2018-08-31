const CACHE_NAME = 'timer-cache-v1';
const urlsToCache = [
  '/',
  '/style.css',
  '/main.js',
];


self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});


self.addEventListener('activate', (event) => {
  // Clean up stale data?
});


self.addEventListener('message', (event) => {
  // ...
});

// functional events?

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(response => ((response) ? response : fetch(event.request)))
  );
});


// sync
// push
