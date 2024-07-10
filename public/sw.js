// Define a name for your cache
const CACHE_NAME = "pos-cache-v1";

// List of URLs to cache
const urlsToCache = [
  "/",
  "/index.html",
  "/logo.ico",
  "/manifest.json",
  "/bundle.js",
  "/SoonKitchenLogo.ico",
  "/static/js/bundle.js",
  // Add other static assets like images, fonts, etc.
];

// Install the service worker and cache assets
this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Intercept fetch requests and serve cached assets
this.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        // Return cached response if found, otherwise fetch from network
        if (response) {
          return response || fetch(event.request);
        }
      })
    );
  }
});
