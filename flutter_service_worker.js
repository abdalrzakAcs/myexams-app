// عامل خدمة بيمسح حالو: نسخ قديمة من الموقع كانت تسجّل عامل بيخزّن الملفات.
// هالنسخة بتمسح كاش فلاتر وبتلغي التسجيل، والزيارة الجاية بتنزل من النت مباشرة.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys()
      .then(function (keys) {
        return Promise.all(keys
          .filter(function (k) { return k.indexOf('flutter-') === 0; })
          .map(function (k) { return caches.delete(k); }));
      })
      .then(function () { return self.registration.unregister(); })
  );
});
