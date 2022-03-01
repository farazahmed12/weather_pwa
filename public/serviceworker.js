const CACHE_NAME = "varsion-1";
const urlsToCache = ["index.html", "offline.html"];

const self = this;

// Install SW
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened Cache");
      return cache.addAll(urlsToCache);
    })
  );
});

// Listen for Request
self.addEventListener("install", (event) => {});

// Activate the SW
self.addEventListener("install", (event) => {});
