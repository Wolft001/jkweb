'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "318e68fbd116c2723bba63302327e82f",
"index.html": "d645c0d5fb3b7ecbdc5adfa195098f73",
"/": "d645c0d5fb3b7ecbdc5adfa195098f73",
"main.dart.js": "e162bc3d5fabce54a5e3bf6675b8695b",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "09f51dbf1b7f155c426b4494f6f45372",
"assets/AssetManifest.json": "30fb2c2412f1d4f7aa3c55e99cba9d71",
"assets/NOTICES": "0126f6cd1e2774d86a9dfdc9976d8494",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "99c61cb5dcc2344c75a5ee8b577a4cbc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "9800db2ae6b6345ba2a9cfdd43687b62",
"assets/fonts/MaterialIcons-Regular.otf": "c663db7aef0f92c8a57937c3f3d76c5d",
"assets/assets/clients/group-2.png": "d815aaa6d9b50e234d510aa36b61370d",
"assets/assets/clients/group-3.png": "fe0248c068c00821b3679c3d69c9a185",
"assets/assets/clients/group-1.png": "5340bb422eca5aeed893780b07436196",
"assets/assets/clients/group-4.png": "baa926f76b7558fdd4901232e0667248",
"assets/assets/clients/group-5.png": "22a1472e903477824d31bc43e875966e",
"assets/assets/clients/group-7.png": "2f681d73998b4da112e6a8f6f0b3778c",
"assets/assets/clients/group-6.png": "810bb275d18c746d133bbb65e8f9cea4",
"assets/assets/clients/group-10.png": "5a020ee5cec18314fcb39ba8a1bf4525",
"assets/assets/clients/group-11.png": "4f526e4bc295f8add60ebc63db81dcdb",
"assets/assets/clients/group-13.png": "ad2362eda6a7e54172b66f75ee2e6926",
"assets/assets/clients/group-8.png": "3d4322e4fb919d0200b07f45a3f5a481",
"assets/assets/clients/group-9.png": "54b93aa613412a0752ac290bbb765af7",
"assets/assets/clients/group-12.png": "4e0f44dc36b00ba43e38b77bcec0bb7c",
"assets/assets/clients/group-15.png": "c44070bcc7a3a8d972be34693b2292e9",
"assets/assets/clients/group-14.png": "36933e4017c5dda3e39b9322f27c199f",
"assets/assets/projects.png": "0d7b033ffffe5e3ea857b541322c6723",
"assets/assets/services.png": "1b414351e1bf7f939a8c49ef032a4f95",
"assets/assets/gallery/photo3-768x1024.png": "ed2a1b7461d6ec07107b2a8d698a47f6",
"assets/assets/gallery/photo4-768x1024.png": "f26685710d99c191619a4a0a2074d430",
"assets/assets/gallery/photo5-768x1024.png": "4b34a1f65c5817d48e5522c5894e1c87",
"assets/assets/gallery/photo2-768x1024.png": "6e38d588ab4e0e32710d78a81b58b878",
"assets/assets/gallery/gallery5-1024x768.png": "b122c5b746c9af2f17a15788146af336",
"assets/assets/gallery/gallery2-1024x768.png": "43c5eea38d157854a8399afcab398a46",
"assets/assets/gallery/gallery3-1024x768.png": "1c014afeca788a1eaea4c8716a3492fc",
"assets/assets/gallery/gallery4-1024x768.png": "4df4322a3b30e1cb3c11f4299564bc0d",
"assets/assets/gallery/gallery6-1024x768.png": "75a8da222b1ae7229f49086af21ab2fd",
"assets/assets/gallery/photo6-768x1024.png": "a2c5d732f7e54d9299488bba3dcdf239",
"assets/assets/sapmle2.png": "dc7e6850de589c5c81aa603c99446987",
"assets/assets/carrers.png": "d0435f660f1645d51993b3d3503f40a8",
"assets/assets/contact.png": "52c29d7568c70788983e37917987105e",
"assets/assets/courses/structuradesign/structural-design-2.png": "a94b038581346593f3400f12c922ec2c",
"assets/assets/courses/structuradesign/pipe3-1.png": "130f2c66f9a1f0fe8bcc6fb76041d735",
"assets/assets/courses/structuradesign/structural2.png": "a49dcc04eea9123706f1f84692097e04",
"assets/assets/courses/structuradesign/structuralwided.png": "5cc1f4f9ac8fdbfe79391667767f4eee",
"assets/assets/courses/structuradesign/structural.png": "b2dfed1fd5147b05d6a66cfdfca2ba30",
"assets/assets/courses/pipedesign/pfs.png": "eb83e0ba28b0722fb693562343595740",
"assets/assets/courses/pipedesign/steel-structure.png": "513ec1bc9a4330b03b154271233f6d56",
"assets/assets/courses/pipedesign/pipedesign3.png": "e5faecbda1e51c0cbfe41afc4fdd0304",
"assets/assets/courses/pipedesign/pipedesign2.png": "73807b0e4b32095ff5098c38850378fe",
"assets/assets/courses/pipedesign/pipiwided.png": "f9575d1b969a8f31e0a3934fe6f1c0f1",
"assets/assets/courses/pipedesign/pipedesign.png": "31d05079fd39345d3d1475f754ec6882",
"assets/assets/courses/mechanical.png": "5298ad7d61ed104e890bdfce029dca92",
"assets/assets/courses/emanpower/widedemanpower.png": "da82dfa2991c86ceeefb06b47ac0a938",
"assets/assets/courses/emanpower/man.png": "33cc2bc8cee7ec55e0c4cb79d61e886d",
"assets/assets/courses/emanpower/man1.png": "007e47cc839a15190bd79510007c14a4",
"assets/assets/courses/emanpower/emanpowes.png": "0839b05e59792ccd6f80804377a452b5",
"assets/assets/courses/electrical.png": "053e0a32a4f035cdadfeb739a92b8851",
"assets/assets/courses/pipesupport/Screenshot%25202024-04-29%2520at%25203.23.33%25E2%2580%25AFAM.png": "37d81ea5af98d27f400ab27774059cdd",
"assets/assets/courses/pipesupport/Screenshot%25202024-04-29%2520at%25203.25.59%25E2%2580%25AFAM.png": "e96ee6ed718216ea46d2f0ff0197a6eb",
"assets/assets/courses/ladder/ladders-q51l7bayv656ogxy3q7jnlispjr5klxndggsngcd8c.png": "f67e38a927290de45a90cab6b9f83a67",
"assets/assets/courses/ladder/Screenshot%25202024-04-29%2520at%25203.27.45%25E2%2580%25AFAM.png": "bc626c973ae76f6af22796940739c7ef",
"assets/assets/courses/ladder/ladderwided.png": "7936868a511b9c42ec17b67b45fc54cb",
"assets/assets/courses/ladder/laddder2.png": "14024401e6250787310ce8a8a0f7e45e",
"assets/assets/courses/ladder/ladder.png": "626f61070b4ffe356055daa0c968a2e0",
"assets/assets/courses/asbuilt/Screenshot%25202024-04-29%2520at%25203.30.11%25E2%2580%25AFAM.png": "926ad07f36ddd0bc3ce896bbc479f08f",
"assets/assets/courses/asbuilt/asbuilt.png": "45c8fbf52579659ead3bfd530415ea89",
"assets/assets/courses/asbuilt/asbuilt2.png": "ae804ccab00e415d6fb0610d19a9f218",
"assets/assets/courses/asbuilt/asbuiltwided.png": "f35a932ee2b7224f5cd10726c4509baa",
"assets/assets/courses/asbuilt/asbilt-2-q55bb4113r1ubxmzhn7hrfcjmqlpl1xnqbocp8n9wk.jpg": "b79f6e79aad6b61eac24202bb44e51c3",
"assets/assets/courses/p&id/widedp&id.png": "905f900d728c720587bde5bec4879024",
"assets/assets/courses/p&id/pid-1-q65fgsqankh43j32hiegxym3peflu5b5pzmjswc26s.jpg": "d27bd52d8e3aa0f99976569136cdc4e0",
"assets/assets/courses/p&id/Screenshot%25202024-04-29%2520at%25203.31.20%25E2%2580%25AFAM.png": "7aa67b86831b20138cd20a9e74af7809",
"assets/assets/courses/p&id/p&id2.png": "5a94dfe86c639aee9e7a52479835abba",
"assets/assets/courses/p&id/p&id1.png": "70cf3c04141d72efcbee947a64d59843",
"assets/assets/courses/2ddrafting/2ddraftwided.png": "c2c7ead32d7ef722b5517d8be6f3bac5",
"assets/assets/courses/2ddrafting/2ddraft2.png": "f0b337c153a2a9765ab550239d12a870",
"assets/assets/courses/2ddrafting/2d-drafting-q51kr2ncs7w9mf6wlmt51l82u1cnazhf7l6y4dw9p0.png": "bc484c5088656b8487e13802cbb88011",
"assets/assets/courses/2ddrafting/Screenshot%25202024-04-29%2520at%25203.32.35%25E2%2580%25AFAM.png": "0d1a6aa8b710acecb21a703aca2a0949",
"assets/assets/courses/2ddrafting/2ddraft.png": "50a3420a56afe39abd5dc30c06e28835",
"assets/assets/courses/pipestress/Screenshot%25202024-04-29%2520at%25203.21.54%25E2%2580%25AFAM.png": "80b737aea33c6de2aaac40c3ab8cdcbf",
"assets/assets/courses/pipestress/stress-2-q698qa1ngt07x6ne1kg1m3ot28yasqmh1ja7dg2ubg.png": "5526c2d343b6809bc2c80c23ebab2444",
"assets/assets/courses/pipestress/pipistress.png": "df42002bac5d8aa9e96e2ae4f343564c",
"assets/assets/courses/pipestress/pipestress2.png": "bf58e33f60505a5d45022b71631df6a4",
"assets/assets/courses/pipestress/pipestresswided.png": "7f58d17eeeffa253d6fe3456b72316b3",
"assets/assets/courses/autocad.png": "8636cd5e6318473eec6e1bc2e11be0bc",
"assets/assets/logo/logo.png": "9d0e1253855b020205c71b107519c61a",
"assets/assets/sample1.png": "a83bc5888afc3234526e0b444c7ed10e",
"assets/assets/web.png": "81cb1b52fc3ecc6e476cbd33c7d0c34a",
"assets/assets/home2.png": "2018815d3daa9e91b12e3dee824d878d",
"assets/assets/about.png": "9eac9ad5ec418efa792c619b9df9dd83",
"assets/assets/about2.png": "a389c56df7ff0dafa70e4f1dc6ce4699",
"assets/assets/carrers/engine.png": "d867d952085e2c771300ec19b3fc56a7",
"assets/assets/carrers/carrens.png": "cb7da810405869bf4b0d36b3ef3613bc",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
