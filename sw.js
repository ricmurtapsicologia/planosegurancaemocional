const CACHE='plano-seguranca-v2.1.0';
const ASSETS=['./','./index.html','./styles.css','./app.js','./manifest.webmanifest','./assets/icon.svg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  e.respondWith(
    caches.match(e.request).then(cached=>{
      if(cached)return cached;
      return fetch(e.request).then(response=>{
        if(response.ok&&response.type==='basic'){
          const clone=response.clone();
          caches.open(CACHE).then(cache=>cache.put(e.request,clone)).catch(()=>{});
        }
        return response;
      }).catch(()=>e.request.mode==='navigate'?caches.match('./index.html'):Response.error());
    })
  );
});