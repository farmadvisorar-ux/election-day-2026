// Election Day 2026 — Zero-Signal Offline Polling Booth Service Worker
const CACHE_NAME = 'election-day-2026-v4';

const OFFLINE_PAGES = [
  '/',
  '/sample-ballot-2026',
  '/voter-id-validator-2026',
  '/find-my-district',
  '/line-rights-2026',
  '/military-overseas-voting-2026',
  '/early-voting-calendar-2026',
  '/ballot-drop-boxes-2026',
  '/ballot-problem-solver',
  '/50-state-comparison-matrix',
  '/poll-closing-times-2026',
  '/manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(OFFLINE_PAGES).catch(() => {
        // Continue install even if partial items fail in dev
      });
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Only handle GET requests for http/https
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);

  // Skip Google Analytics, external API requests
  if (url.origin !== self.location.origin) return;

  // Network-first with cache fallback for navigation requests
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => {
          return caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) return cachedResponse;
            return caches.match('/sample-ballot-2026');
          });
        })
    );
    return;
  }

  // Stale-while-revalidate for static assets
  event.respondWith(
    caches.match(event.request).then((cached) => {
      const networked = fetch(event.request)
        .then((response) => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => cached);

      return cached || networked;
    })
  );
});
