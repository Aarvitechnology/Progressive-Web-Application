self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open('fox-store').then(function(cache) {
            return cache.addAll([
                'https://aarvitech.com/Research/PWA/pwa-examples-master/a2hs/',
                'https://aarvitech.com/Research/PWA/pwa-examples-master/a2hs/index.html',
                'https://aarvitech.com/Research/PWA/pwa-examples-master/a2hs/index.js',
                'https://aarvitech.com/Research/PWA/pwa-examples-master/a2hs/style.css',
                'https://aarvitech.com/Research/PWA/pwa-examples-master/a2hs/images/fox1.jpg',
                'https://aarvitech.com/Research/PWA/pwa-examples-master/a2hs/images/fox2.jpg',
                'https://aarvitech.com/Research/PWA/pwa-examples-master/a2hs/images/fox3.jpg',
                'https://aarvitech.com/Research/PWA/pwa-examples-master/a2hs/images/fox4.jpg'
            ]);
        })
    );
});

self.addEventListener('fetch', function(e) {
    console.log(e.request.url);
    e.respondWith(
        caches.match(e.request).then(function(response) {
            return response || fetch(e.request);
        })
    );
});