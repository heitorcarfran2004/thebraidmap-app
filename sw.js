// Service worker do The Braid Map (app de membros): deixa o app "instalável" (PWA, Add to Home Screen).
// Não intercepta as requisições (sem event.respondWith): cada requisição segue o fluxo normal do navegador.
self.addEventListener("install", () => { self.skipWaiting(); });
self.addEventListener("activate", (event) => { event.waitUntil(self.clients.claim()); });
self.addEventListener("fetch", () => {});
