const CACHE='foodwaste-iphone-v4';
const ASSETS=[
 './','./index.html','./manifest.json',
 './icons/icon-120.png','./icons/icon-152.png','./icons/icon-167.png',
 './icons/icon-180.png','./icons/icon-192.png','./icons/icon-512.png'
];
self.addEventListener('install',e=>e.waitUntil(
 caches.open(CACHE).then(c=>c.addAll(ASSETS))
));
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>e.respondWith(
 caches.match(e.request).then(r=>r||fetch(e.request))
));
