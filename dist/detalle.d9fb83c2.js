// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"n24mg":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "534a75bbd9fb83c2";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"22u1m":[function(require,module,exports,__globalThis) {
// const links = document.querySelectorAll('.menu-link');
// const contentUrl = document.getElementById("main-nav").getAttribute('data-url');
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _fiestaJson = require("../data/fiesta.json");
var _fiestaJsonDefault = parcelHelpers.interopDefault(_fiestaJson);
var _gastronomiaJson = require("../data/gastronomia.json");
var _gastronomiaJsonDefault = parcelHelpers.interopDefault(_gastronomiaJson);
var _culturaJson = require("../data/cultura.json");
var _culturaJsonDefault = parcelHelpers.interopDefault(_culturaJson);
var _rucheyJson = require("../data/ruchey.json");
var _rucheyJsonDefault = parcelHelpers.interopDefault(_rucheyJson);
const urlParams = new URLSearchParams(window.location.search);
const content = urlParams.get("det");
let data = "";
switch(content){
    case "fiesta":
        data = (0, _fiestaJsonDefault.default);
        break;
    case "gastronomia":
        data = (0, _gastronomiaJsonDefault.default);
        break;
    case "cultura":
        data = (0, _culturaJsonDefault.default);
        break;
    case "ruchey":
        data = (0, _rucheyJsonDefault.default);
        break;
}
document.addEventListener('DOMContentLoaded', ()=>{
    // Llenamos los datos del html
    const titulo = document.getElementById("title");
    const subtitulo = document.getElementById("subtitle");
    const fotoDestacada = document.getElementById("imgDestacada");
    // const card1 = document.getElementById("card_det_1");
    // const card2 = document.getElementById("card_det_2");
    // const card3 = document.getElementById("card_det_3");
    const fecha = document.getElementById("fecha");
    const media = document.getElementById("media");
    const tituloLista = document.getElementById("tituloLista");
    const lista = document.getElementById("lista");
    const parrafo1 = document.getElementById("parrafo1");
    const parrafo2 = document.getElementById("parrafo2");
    const parrafo3 = document.getElementById("parrafo3");
    // METEMOS LOS DATOS EN EL DOM **********************************
    titulo.innerHTML = data.titulo;
    subtitulo.innerHTML = data.subtitulo;
    data.fotoDestacada.sources.forEach((sc, index)=>{
        let url = null;
        switch(content){
            case "fiesta":
                if (index == 0) url = new URL(require("2cf050caf64c50cc"));
                else if (index == 1) url = new URL(require("c68eaee3056e92d2"));
                else url = new URL(require("af77b2931bccd28f"));
                break;
            case "gastronomia":
                if (index == 0) url = new URL(require("adcf70ad3b9993"));
                else if (index == 1) url = new URL(require("32b560d130f4f40d"));
                else url = new URL(require("6bb9bc6d315b36aa"));
                break;
            case "cultura":
                if (index == 0) url = new URL(require("ebd8b0885cb97f21"));
                else if (index == 1) url = new URL(require("310fb687ada3a3af"));
                else url = new URL(require("4844e27cb59b60a7"));
                break;
            case "ruchey":
                if (index == 0) url = new URL(require("8304fff2c9add431"));
                else if (index == 1) url = new URL(require("da3b0119421c8834"));
                else url = new URL(require("eba36c8359880b8d"));
                break;
        }
        fotoDestacada.children[index].srcset = url;
        fotoDestacada.children[index].type = sc.type;
        fotoDestacada.children[index].media = sc.media;
        if (index == 2) {
            fotoDestacada.children[2].src = url;
            fotoDestacada.children[2].alt = sc.alt;
        }
    });
    data.fotos.forEach((ft, index)=>{
        const card = document.getElementById(`card_det_${index + 1}`);
        console.log(card);
        let urlFoto = null;
        let figure = card.children[0];
        switch(content){
            case "fiesta":
                if (index == 0) urlFoto = new URL(require("1a8ae7bedc3a7f67"));
                else if (index == 1) urlFoto = new URL(require("73690405e7ba1963"));
                else urlFoto = new URL(require("2cf050caf64c50cc"));
                break;
            case "gastronomia":
                if (index == 0) urlFoto = new URL(require("42d6552c9a6e85d3"));
                else if (index == 1) urlFoto = new URL(require("fd7c89b212d617e5"));
                else urlFoto = new URL(require("73f7c9979dc2e7b1"));
                break;
            case "cultura":
                if (index == 0) urlFoto = new URL(require("d2e789df928960cf"));
                else if (index == 1) urlFoto = new URL(require("87295d2d7c7a4201"));
                else urlFoto = new URL(require("602ab364d908ed0f"));
                break;
            case "ruchey":
                if (index == 0) urlFoto = new URL(require("bf0e72893df9d32b"));
                else if (index == 1) urlFoto = new URL(require("40c497b174107b87"));
                else urlFoto = new URL(require("7129a98c9fce3a95"));
                break;
        }
        figure.children[0].src = urlFoto;
        figure.children[0].alt = ft.alt;
        let body = card.children[1];
        body.children[0].innerHTML = ft.alt;
        body.children[1].innerHTML = ft.desc;
    });
    fecha.innerHTML = data.fecha;
    media.src = data.media;
    tituloLista.innerHTML = data.tituloLista;
    let items = "";
    data.lista.forEach((li)=>{
        items += `<li>${li.acto} ${li.dia}</li>`;
    });
    lista.innerHTML = items;
    parrafo1.innerHTML = data.parrafo1;
    parrafo2.innerHTML = data.parrafo2;
    parrafo3.innerHTML = data.parrafo3;
});

},{"../data/fiesta.json":"aWNGp","../data/gastronomia.json":"lB7o4","../data/cultura.json":"dCnSq","../data/ruchey.json":"g9iRg","af77b2931bccd28f":"2rvsH","adcf70ad3b9993":"fJ4tw","32b560d130f4f40d":"Ji65S","6bb9bc6d315b36aa":"622e5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","2cf050caf64c50cc":"k43hC","c68eaee3056e92d2":"dwSw5","42d6552c9a6e85d3":"a07pf","fd7c89b212d617e5":"flQFm","73f7c9979dc2e7b1":"ktJRN","1a8ae7bedc3a7f67":"fZBxf","73690405e7ba1963":"3eLEK","da3b0119421c8834":"5hN1z","8304fff2c9add431":"3KPpG","eba36c8359880b8d":"hA93q","bf0e72893df9d32b":"h25ps","40c497b174107b87":"k1p4X","7129a98c9fce3a95":"kzovo","d2e789df928960cf":"k1fFa","87295d2d7c7a4201":"kel53","602ab364d908ed0f":"k5dkw","ebd8b0885cb97f21":"1sVGT","310fb687ada3a3af":"2xuMv","4844e27cb59b60a7":"hhfzr"}],"aWNGp":[function(require,module,exports,__globalThis) {
module.exports = JSON.parse('{"titulo":"Fiestas de Moros y Cristianos","subtitulo":"En honor a la Virgen de las injurias","fotoDestacada":{"sources":[{"srcset":"images/cards/mic.webp?width=480","type":"image/webp","media":"(max-width: 480px)"},{"srcset":"images/cards/mic_3x.jpg?as=webp&width=800","type":"image/webp","media":"(max-width: 960px)"},{"src":"images/cards/mic.jpg","alt":"Foto destacada categor\xeda fiestas"}]},"fotos":[{"src":"images/cards/mic.jpg","sizes":"(max-width: 480px) 440px, 800px","srcset":"images/cards/mic_3x.jpg 480w, images/cards/mic_2x.jpg 800w","alt":"Desfile Cristiano","desc":"Nuestros espectaculares desfiles, con trajes propios te haran emocionarte."},{"src":"images/cards/tiroteo.jpg","sizes":"(max-width: 480px) 440px, 800px","srcset":"images/cards/mic_3x.jpg 480w, images/cards/mic_2x.jpg 800w","alt":"Tiroteo","desc":"Espectacular recreaci\xf3n de la batalla para defender la villa. Luego de este acto es la embajada."},{"src":"images/cards/mic_3x.jpg","sizes":"(max-width: 480px) 440px, 800px","srcset":"images/cards/mic_3x.jpg 480w, images/cards/mic_2x.jpg 800w","alt":"L\'Arranc\xe0","desc":"Uno de nuestros actos m\xe1s emblem\xe1ticos es \'L\'Arranc\xe0\' donde se juntan emociones, sentimientos y muchas ganas de fiesta."}],"fecha":"Del 12 al 15 de octubre","media":"https://www.youtube.com/embed/FM6jGYCIt-Q?si=_4rVl3vxgVEflxyp","tituloLista":"Actos Principales","lista":[{"acto":"<b>Acto</b>:L\'arranc\xe0","dia":"12 de octubre a las 12:30"},{"acto":"<b>Acto</b>:Entr\xe0 Cristiana","dia":"12 de octubre a las 19:00"},{"acto":"<b>Acto</b>:Entra infantil Mora i Cristiana","dia":"13 de octubre a las 11:30"},{"acto":"<b>Acto</b>:Entr\xe0 Mora","dia":"13 de octubre a las 18:30"},{"acto":"<b>Acto</b>:Tiroteig i Ambaix\xe0 Mora","dia":"14 de octubre a las 16:30"},{"acto":"<b>Acto</b>:Tiroteig i Ambaix\xe0 Cristiana","dia":"15 de octubre a las 16:30"}],"parrafo1":"Cada dissabte de festes, a les dotze del migdia, Callosa enceta les seues festes de Moros i Cristians amb la tradicional Arranc\xe0 de dol\xe7aines. Els passacarrers del dissabte de festes ja s\xf3n peces tradicionals de les colles dol\xe7aineres, i \xe9s ac\xed on prenen la seua ra\xf3 de ser. A partir d\u2019eixe moment, comencen quatre dies d\u2019actes festers, m\xfasica i sentiment fester.","parrafo2":"Des de 1860, fent festes de Moros i Cristians.","parrafo3":"La missi\xf3 de l\u2019Associaci\xf3 \xe9s organitzar una de les festes m\xe9s veteranes del mon fester. S\xf3m m\xe9s de 2.800 socis, dels quals, 1.000 s\xf3n socis festers, \xe9s a dir, pertanyen a alguna fil\xe0, i la resta s\xf3n socis no festers."}');

},{}],"lB7o4":[function(require,module,exports,__globalThis) {
module.exports = JSON.parse('{"titulo":"Jornadas de la Cuchara","subtitulo":"Arroces, fideu\xe1s, crosta, olletas y minchos","fotoDestacada":{"sources":[{"srcset":"images/cards/minchos_3x.jpg","type":"image/webp","media":"(max-width: 480px)"},{"srcset":"images/cards/mic_3x.jpg?as=webp&width=800","type":"image/webp","media":"(max-width: 960px)"},{"src":"images/cards/mic.jpg","alt":"Foto destacada categor\xeda fiestas"}]},"fotos":[{"src":"images/cards/crosta.jpg","sizes":"(max-width: 480px) 440px, 800px","srcset":"images/cards/mic_3x.jpg 480w, images/cards/mic_2x.jpg 800w","alt":"Arroz con crosta","desc":"Plato t\xedpico con gran sabor, con embutido, carne de puchero ,huevo ..."},{"src":"images/cards/arroz.jpg","sizes":"(max-width: 480px) 440px, 800px","srcset":"images/cards/mic_3x.jpg 480w, images/cards/mic_2x.jpg 800w","alt":"Arroz de Galeras y Nispero","desc":"Arroz meloso con galeras y nispero, un plato diferente"},{"src":"images/cards/olleta.jpg","sizes":"(max-width: 480px) 440px, 800px","srcset":"images/cards/mic_3x.jpg 480w, images/cards/mic_2x.jpg 800w","alt":"Olleta Callosina","desc":"La Olleta callosina es otro plato emblem\xe1tico de Callosa d\'en Sarri\xe1, conocido por su riqueza y profundidad de sabores."}],"fecha":"Del 1 al 30 de noviembre","media":"https://www.youtube.com/embed/POv5lHZvPzk?si=80-mkialNN5WPK2R","tituloLista":"Restaurantes Participantes","lista":[{"acto":"Restaurante Casa Marcos","dia":"2 y 3 de noviembre"},{"acto":"Restaurante Algar de Don Joan","dia":"9 y 10 de noviembre"},{"acto":"Restaurante La Fonda","dia":"15 y 30 de noviembre"},{"acto":"Restaurante Les Fonts","dia":"15 y 16 de noviembre"},{"acto":"Restaurante El Valle","dia":"23 y 24 de noviembre"}],"parrafo1":"Destaca el \u201Cputxero amb pilotes\u201D, plato t\xedpico en fiestas patronales de Moros y Cristianos. Que consta de tres platos: sopa de fideos hecha con el caldo del cocido, pelotas de carne picada envueltas en hojas de col hervida y el \u201Cputxero\u201D (cocido) hecho con la carne y los garbanzos.","parrafo2":"El arroz es la base de otros muchos platos importantes, como el \u201Carr\xf2s en costra\u201D, plato t\xedpico de carnaval. Es un arroz seco y contiene entre otros ingredientes, embutidos, cubierto de huevo batido, hecho al horno en cazuela de barro. Otros arroces a destacar son el \u201Carr\xf2s al forn\u201D (arroz al horno) y \u201Cl\u2019olleta\u201D.","parrafo3":"El plato t\xedpico de los d\xedas de lluvia lo constituyen los \u201Cminxos\u201D. Se trata de una base hecha de pasta de harina, escaldada, sobre la que se ponen todo tipo de verduras troceadas (fresca y en salmuera) y pescado (pescadilla y \u201Csepionet\u201D) que se coloca sobre una tabla de madera para llevar a ser horneado. Se come acompa\xf1ado de \u201Call i oli\u201D y vino tinto."}');

},{}],"dCnSq":[function(require,module,exports,__globalThis) {
module.exports = JSON.parse('{"titulo":"Patrimonio Cultural","subtitulo":"Desde un excelente paraje natural hasta un hermoso casco antiguo","fotoDestacada":{"sources":[{"srcset":"images/cards/minchos_3x.jpg","type":"image/webp","media":"(max-width: 480px)"},{"srcset":"images/cards/mic_3x.jpg?as=webp&width=800","type":"image/webp","media":"(max-width: 960px)"},{"src":"images/cards/mic.jpg","alt":"Foto destacada categor\xeda fiestas"}]},"fotos":[{"src":"images/cards/crosta.jpg","sizes":"(max-width: 480px) 440px, 800px","srcset":"images/cards/mic_3x.jpg 480w, images/cards/mic_2x.jpg 800w","alt":"El portal","desc":"Visite los restos de la muralla medieval y la entrada al pueblo."},{"src":"images/cards/arroz.jpg","sizes":"(max-width: 480px) 440px, 800px","srcset":"images/cards/mic_3x.jpg 480w, images/cards/mic_2x.jpg 800w","alt":"El fort","desc":"Fortaleza situada en lo alto de la monta\xf1a de la \xe9poca renacentista."},{"src":"images/cards/olleta.jpg","sizes":"(max-width: 480px) 440px, 800px","srcset":"images/cards/mic_3x.jpg 480w, images/cards/mic_2x.jpg 800w","alt":"Rio Algar","desc":"Nuestro gran paraje natural, podr\xe1s ba\xf1arte en pozas naturales con aguas cristalinas."}],"fecha":"Del 1 al 30 de noviembre","media":"https://www.youtube.com/embed/X6XC2cdNE08?si=mBIxh7pvCHCn4pGd","tituloLista":"Sitios importantes","lista":[{"acto":"Les fontes del algar","dia":"<a href=\'https://lasfuentesdelalgar.com/\'>Visitar Web</a>"},{"acto":"El Portal","dia":""},{"acto":"Museo Etnol\xf3gico y Arqueol\xf3gico","dia":""},{"acto":"Iglesia Arciprestal de San Juan Bautista","dia":""},{"acto":"El Poador de la Font Major","dia":""}],"parrafo1":"La primera noticia que se tiene de la Iglesia actual es del a\xf1o 1574, cuando se constituye la Iglesia Parroquial de Callosa que en el a\xf1o 1578 fue inaugurada por Francisco de Mesa. En la segunda mitad del siglo XVIII se plantea su ampliaci\xf3n y en 1765 empieza la construcci\xf3n del crucero acab\xe1ndose en el a\xf1o 1786. En el a\xf1o 1819 las obras son en la fachada que se realiza en m\xe1rmol de las canteras locales y que no se finaliza hasta el a\xf1o 1865. El cuerpo superior de la fachada no se har\xe1 hasta el a\xf1o 1917, pero no en m\xe1rmol negro sino en cemento pintado imitando al m\xe1rmol.","parrafo2":"El \xf3rgano de la Iglesia de San Juan Bautista es un \xf3rgano barroco construido, supuestamente, en el a\xf1o 1754 por Bartolom\xe9 Sanchez para un convento de Cocentaina, y que fue comprado y trasladado a Callosa en el a\xf1o 1845.","parrafo3":"Exteriormente el instrumento nos presenta una fachada estilo neocl\xe1sico de madera natural de acuerdo con el resto la iglesia. Dado el buen estado del \xf3rgano se sigue utilizando con mucha frecuencia en conciertos y misas."}');

},{}],"g9iRg":[function(require,module,exports,__globalThis) {
module.exports = JSON.parse('{"titulo":"Cooperativa Ruchey","subtitulo":"Nisperos con denominaci\xf3n de origen","fotoDestacada":{"sources":[{"srcset":"images/cards/minchos_3x.jpg","type":"image/webp","media":"(max-width: 480px)"},{"srcset":"images/cards/mic_3x.jpg?as=webp&width=800","type":"image/webp","media":"(max-width: 960px)"},{"src":"images/cards/mic.jpg","alt":"Foto destacada categor\xeda fiestas"}]},"fotos":[{"src":"images/cards/crosta.jpg","sizes":"(max-width: 480px) 440px, 800px","srcset":"images/cards/mic_3x.jpg 480w, images/cards/mic_2x.jpg 800w","alt":"Aguacates","desc":"Somos, junto a Malaga, uno de los grandes productores de aguacates del pa\xeds"},{"src":"images/cards/arroz.jpg","sizes":"(max-width: 480px) 440px, 800px","srcset":"images/cards/mic_3x.jpg 480w, images/cards/mic_2x.jpg 800w","alt":"Pitayas","desc":"Producimos frutras tropicales como las pitayas, papayas, mangos ..."},{"src":"images/cards/olleta.jpg","sizes":"(max-width: 480px) 440px, 800px","srcset":"images/cards/mic_3x.jpg 480w, images/cards/mic_2x.jpg 800w","alt":"Licores","desc":"Tambi\xe9n producimos cervezas, licores y gran variedad de productos derivados del nispero.."}],"fecha":"Visitas Del 1 de julio al 30 de agosto","media":"https://www.youtube.com/embed/nQORf_fiUZ4?si=hylTlJKeHIpZnMGu","tituloLista":"Principales productos","lista":[{"acto":"Nisperos","dia":"De marzo a mayo"},{"acto":"Aguacates","dia":"De octubre a diciembre y de abril a junio"},{"acto":"Naranja","dia":"Todo el a\xf1o"},{"acto":"Limones","dia":"Todo el a\xf1o"},{"acto":"Pitallas","dia":""}],"parrafo1":"Actualmente, en la Cooperativa Agr\xedcola Callosa de\u2019n Sarri\xe0 seguimos creciendo y, de manera cont\xednua, nos adaptamos a las nuevas necesidades de nuestros clientes por eso, nuestros esfuerzos est\xe1n dirigidos a la calidad, la innovaci\xf3n y la excelencia.Todo ello, forma parte del saber hacer de nuestro equipo humano, personas comprometidas y motivadas para hacer realidad nuestra raz\xf3n de ser: nuestros clientes.","parrafo2":"A trav\xe9s de nuestras marcas reconocidas Ruchey y Font d\u2019Algar, comercializamos las frutas y hortalizas producidas por nuestros socios agricultores y, de este modo, nos aseguramos de que nuestros clientes reciban la m\xe1xima calidad al mejor precio.","parrafo3":"Adem\xe1s de nuestra dedicaci\xf3n en el \xe1rea Hortofrut\xedcola, ofrecemos a nuestros agricultores asociados los diferentes productos y, el asesoramiento profesional para la aplicaci\xf3n de los tratamientos adecuados a sus campos y otros productos alimentarios, a trav\xe9s de nuestra \xe1rea de Suministros."}');

},{}],"2rvsH":[function(require,module,exports,__globalThis) {
module.exports = require("27f0a206c8dd0eec").getBundleURL('79m1J') + "mic.f80d111c.webp" + "?" + Date.now();

},{"27f0a206c8dd0eec":"lgJ39"}],"lgJ39":[function(require,module,exports,__globalThis) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"fJ4tw":[function(require,module,exports,__globalThis) {
module.exports = require("4e3bc04072748c43").getBundleURL('79m1J') + "minchos_3x.64b77e70.webp" + "?" + Date.now();

},{"4e3bc04072748c43":"lgJ39"}],"Ji65S":[function(require,module,exports,__globalThis) {
module.exports = require("156f3cf4baa3b133").getBundleURL('79m1J') + "minchos_2x.0c1bef8c.webp" + "?" + Date.now();

},{"156f3cf4baa3b133":"lgJ39"}],"622e5":[function(require,module,exports,__globalThis) {
module.exports = require("b12ad5a7d17491c3").getBundleURL('79m1J') + "minchos.196e398a.webp" + "?" + Date.now();

},{"b12ad5a7d17491c3":"lgJ39"}],"gkKU3":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"k43hC":[function(require,module,exports,__globalThis) {
module.exports = require("476c5b7da0672052").getBundleURL('79m1J') + "mic_3x.3536797b.webp" + "?" + Date.now();

},{"476c5b7da0672052":"lgJ39"}],"dwSw5":[function(require,module,exports,__globalThis) {
module.exports = require("d14064cbd609f4b6").getBundleURL('79m1J') + "mic_2x.7bfb1d4f.webp" + "?" + Date.now();

},{"d14064cbd609f4b6":"lgJ39"}],"a07pf":[function(require,module,exports,__globalThis) {
module.exports = require("f0e18d20e1d1ec2b").getBundleURL('79m1J') + "crosta.82b4fa05.webp" + "?" + Date.now();

},{"f0e18d20e1d1ec2b":"lgJ39"}],"flQFm":[function(require,module,exports,__globalThis) {
module.exports = require("81ed27c0ba7ede").getBundleURL('79m1J') + "arroz.5e56e23d.webp" + "?" + Date.now();

},{"81ed27c0ba7ede":"lgJ39"}],"ktJRN":[function(require,module,exports,__globalThis) {
module.exports = require("83027ba298208721").getBundleURL('79m1J') + "olleta.2e9d5845.webp" + "?" + Date.now();

},{"83027ba298208721":"lgJ39"}],"fZBxf":[function(require,module,exports,__globalThis) {
module.exports = require("348c50ee76f72fe6").getBundleURL('79m1J') + "mic.bf99303f.webp" + "?" + Date.now();

},{"348c50ee76f72fe6":"lgJ39"}],"3eLEK":[function(require,module,exports,__globalThis) {
module.exports = require("7d5f723e28282767").getBundleURL('79m1J') + "tiroteo.a29ed253.webp" + "?" + Date.now();

},{"7d5f723e28282767":"lgJ39"}],"5hN1z":[function(require,module,exports,__globalThis) {
module.exports = require("bf26a24c611bd415").getBundleURL('79m1J') + "ruchey_2x.10ca54a9.webp" + "?" + Date.now();

},{"bf26a24c611bd415":"lgJ39"}],"3KPpG":[function(require,module,exports,__globalThis) {
module.exports = require("6c4f3fd608254bac").getBundleURL('79m1J') + "ruchey_3x.24057d50.webp" + "?" + Date.now();

},{"6c4f3fd608254bac":"lgJ39"}],"hA93q":[function(require,module,exports,__globalThis) {
module.exports = require("53edea9131725eee").getBundleURL('79m1J') + "ruchey.035d9d10.webp" + "?" + Date.now();

},{"53edea9131725eee":"lgJ39"}],"h25ps":[function(require,module,exports,__globalThis) {
module.exports = require("3f9685d108d33f22").getBundleURL('79m1J') + "aguacate.eecb1009.webp" + "?" + Date.now();

},{"3f9685d108d33f22":"lgJ39"}],"k1p4X":[function(require,module,exports,__globalThis) {
module.exports = require("6ddecff2a594b9db").getBundleURL('79m1J') + "pitaya.60120e9a.avif" + "?" + Date.now();

},{"6ddecff2a594b9db":"lgJ39"}],"kzovo":[function(require,module,exports,__globalThis) {
module.exports = require("4cc07ae058337db3").getBundleURL('79m1J') + "cerveza.573cfa66.webp" + "?" + Date.now();

},{"4cc07ae058337db3":"lgJ39"}],"k1fFa":[function(require,module,exports,__globalThis) {
module.exports = require("d0f41046da71c1c6").getBundleURL('79m1J') + "portal.b544660b.webp" + "?" + Date.now();

},{"d0f41046da71c1c6":"lgJ39"}],"kel53":[function(require,module,exports,__globalThis) {
module.exports = require("6a644868da3e16a6").getBundleURL('79m1J') + "fort.7d37e8e0.webp" + "?" + Date.now();

},{"6a644868da3e16a6":"lgJ39"}],"k5dkw":[function(require,module,exports,__globalThis) {
module.exports = require("ad654c2a73cd7396").getBundleURL('79m1J') + "algar.17c6c493.webp" + "?" + Date.now();

},{"ad654c2a73cd7396":"lgJ39"}],"1sVGT":[function(require,module,exports,__globalThis) {
module.exports = require("5fdbfe18805d4ea9").getBundleURL('79m1J') + "algar_3x.6d9e5836.jpeg" + "?" + Date.now();

},{"5fdbfe18805d4ea9":"lgJ39"}],"2xuMv":[function(require,module,exports,__globalThis) {
module.exports = require("5b016f59cccd228c").getBundleURL('79m1J') + "algar_2x.35e78bfc.jpeg" + "?" + Date.now();

},{"5b016f59cccd228c":"lgJ39"}],"hhfzr":[function(require,module,exports,__globalThis) {
module.exports = require("dd065ef46b6c82df").getBundleURL('79m1J') + "algar.e38df000.jpeg" + "?" + Date.now();

},{"dd065ef46b6c82df":"lgJ39"}]},["n24mg","22u1m"], "22u1m", "parcelRequire94c2")

//# sourceMappingURL=detalle.d9fb83c2.js.map
