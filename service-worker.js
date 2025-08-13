// Service worker tuned for GitHub Pages
const CACHE_NAME = 'sunlit-earth-ghp-v1';
const PRECACHE = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  'https://unpkg.com/three@0.160.0/build/three.min.js',
  'https://unpkg.com/three@0.160.0/examples/js/controls/OrbitControls.js'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE)));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.map(k => k !== CACHE_NAME ? caches.delete(k) : null)))
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  const req = event.request;
  // Cache-first for same-origin, network-first fallback approach for others
  event.respondWith(
    caches.match(req).then(cached => {
      const fetchPromise = fetch(req).then(networkRes => {
        // Cache GET responses (including opaque for cross-origin CDNs)
        if (req.method === 'GET' && networkRes) {
          const copy = networkRes.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(req, copy)).catch(()=>{});
        }
        return networkRes;
      }).catch(() => cached);
      return cached || fetchPromise;
    })
  );
});
