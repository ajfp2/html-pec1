// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"data/fiesta.json":[function(require,module,exports) {
module.exports = {
  "titulo": "Fiestas de Moros y Cristianos",
  "subtitulo": "En honor a la Virgen de las injurias",
  "fecha": "Del 12 al 15 de octubre",
  "media": "https://www.youtube.com/embed/FM6jGYCIt-Q?si=_4rVl3vxgVEflxyp",
  "tituloLista": "Actos Principales",
  "lista": [{
    "acto": "<b>Acto</b>:L'arrancà",
    "dia": "12 de octubre a las 12:30"
  }, {
    "acto": "<b>Acto</b>:Entrà Cristiana",
    "dia": "12 de octubre a las 19:00"
  }, {
    "acto": "<b>Acto</b>:Entra infantil Mora i Cristiana",
    "dia": "13 de octubre a las 11:30"
  }, {
    "acto": "<b>Acto</b>:Entrà Mora",
    "dia": "13 de octubre a las 18:30"
  }, {
    "acto": "<b>Acto</b>:Tiroteig i Ambaixà Mora",
    "dia": "14 de octubre a las 16:30"
  }, {
    "acto": "<b>Acto</b>:Tiroteig i Ambaixà Cristiana",
    "dia": "15 de octubre a las 16:30"
  }],
  "parrafo1": "Cada dissabte de festes, a les dotze del migdia, Callosa enceta les seues festes de Moros i Cristians amb la tradicional Arrancà de dolçaines. Els passacarrers del dissabte de festes ja són peces tradicionals de les colles dolçaineres, i és ací on prenen la seua raó de ser. A partir d’eixe moment, comencen quatre dies d’actes festers, música i sentiment fester.",
  "parrafo2": "Des de 1860, fent festes de Moros i Cristians.",
  "parrafo3": "La missió de l’Associació és organitzar una de les festes més veteranes del mon fester. Sóm més de 2.800 socis, dels quals, 1.000 són socis festers, és a dir, pertanyen a alguna filà, i la resta són socis no festers."
};
},{}],"data/gastronomia.json":[function(require,module,exports) {
module.exports = {
  "titulo": "Jornadas de la Cuchara",
  "subtitulo": "Arroces, fideuás, calderetas, olletas y minchos",
  "fecha": "Del 1 al 30 de noviembre",
  "media": "https://www.youtube.com/embed/POv5lHZvPzk?si=80-mkialNN5WPK2R",
  "tituloLista": "Restaurantes Participantes",
  "lista": [{
    "acto": "Restaurante Casa Marcos",
    "dia": "2 y 3 de noviembre"
  }, {
    "acto": "Restaurante Algar de Don Joan",
    "dia": "9 y 10 de noviembre"
  }, {
    "acto": "Restaurante La Fonda",
    "dia": "15 y 30 de noviembre"
  }, {
    "acto": "Restaurante Les Fonts",
    "dia": "15 y 16 de noviembre"
  }, {
    "acto": "Restaurante El Valle",
    "dia": "23 y 24 de noviembre"
  }],
  "parrafo1": "Destaca el “putxero amb pilotes”, plato típico en fiestas patronales de Moros y Cristianos. Que consta de tres platos: sopa de fideos hecha con el caldo del cocido, pelotas de carne picada envueltas en hojas de col hervida y el “putxero” (cocido) hecho con la carne y los garbanzos.",
  "parrafo2": "El arroz es la base de otros muchos platos importantes, como el “arròs en costra”, plato típico de carnaval. Es un arroz seco y contiene entre otros ingredientes, embutidos, cubierto de huevo batido, hecho al horno en cazuela de barro. Otros arroces a destacar son el “arròs al forn” (arroz al horno) y “l’olleta”.",
  "parrafo3": "El plato típico de los días de lluvia lo constituyen los “minxos”. Se trata de una base hecha de pasta de harina, escaldada, sobre la que se ponen todo tipo de verduras troceadas (fresca y en salmuera) y pescado (pescadilla y “sepionet”) que se coloca sobre una tabla de madera para llevar a ser horneado. Se come acompañado de “all i oli” y vino tinto."
};
},{}],"data/cultura.json":[function(require,module,exports) {
module.exports = {
  "titulo": "Patrimonio Cultural",
  "subtitulo": "Desde un excelente paraje natural hasta un hermoso casco antiguo",
  "fecha": "Del 1 al 30 de noviembre",
  "media": "https://www.youtube.com/embed/X6XC2cdNE08?si=mBIxh7pvCHCn4pGd",
  "tituloLista": "Sitios importantes",
  "lista": [{
    "acto": "Les fontes del algar",
    "dia": "<a href='https://lasfuentesdelalgar.com/'>Visitar Web</a>"
  }, {
    "acto": "El Portal",
    "dia": ""
  }, {
    "acto": "Museo Etnológico y Arqueológico",
    "dia": ""
  }, {
    "acto": "Iglesia Arciprestal de San Juan Bautista",
    "dia": ""
  }, {
    "acto": "El Poador de la Font Major",
    "dia": ""
  }],
  "parrafo1": "La primera noticia que se tiene de la Iglesia actual es del año 1574, cuando se constituye la Iglesia Parroquial de Callosa que en el año 1578 fue inaugurada por Francisco de Mesa. En la segunda mitad del siglo XVIII se plantea su ampliación y en 1765 empieza la construcción del crucero acabándose en el año 1786. En el año 1819 las obras son en la fachada que se realiza en mármol de las canteras locales y que no se finaliza hasta el año 1865. El cuerpo superior de la fachada no se hará hasta el año 1917, pero no en mármol negro sino en cemento pintado imitando al mármol.",
  "parrafo2": "El órgano de la Iglesia de San Juan Bautista es un órgano barroco construido, supuestamente, en el año 1754 por Bartolomé Sanchez para un convento de Cocentaina, y que fue comprado y trasladado a Callosa en el año 1845.",
  "parrafo3": "Exteriormente el instrumento nos presenta una fachada estilo neoclásico de madera natural de acuerdo con el resto la iglesia. Dado el buen estado del órgano se sigue utilizando con mucha frecuencia en conciertos y misas."
};
},{}],"data/ruchey.json":[function(require,module,exports) {
module.exports = {
  "titulo": "Cooperativa Ruchey",
  "subtitulo": "Nisperos con denominación de origen",
  "fecha": "Visitas Del 1 de julio al 30 de agosto",
  "media": "https://www.youtube.com/embed/nQORf_fiUZ4?si=hylTlJKeHIpZnMGu",
  "tituloLista": "Principales productos",
  "lista": [{
    "acto": "Nisperos",
    "dia": "De marzo a mayo"
  }, {
    "acto": "Aguacates",
    "dia": "De octubre a diciembre y de abril a junio"
  }, {
    "acto": "Naranja",
    "dia": "Todo el año"
  }, {
    "acto": "Limones",
    "dia": "Todo el año"
  }, {
    "acto": "Pitallas",
    "dia": ""
  }],
  "parrafo1": "Actualmente, en la Cooperativa Agrícola Callosa de’n Sarrià seguimos creciendo y, de manera contínua, nos adaptamos a las nuevas necesidades de nuestros clientes por eso, nuestros esfuerzos están dirigidos a la calidad, la innovación y la excelencia.Todo ello, forma parte del saber hacer de nuestro equipo humano, personas comprometidas y motivadas para hacer realidad nuestra razón de ser: nuestros clientes.",
  "parrafo2": "A través de nuestras marcas reconocidas Ruchey y Font d’Algar, comercializamos las frutas y hortalizas producidas por nuestros socios agricultores y, de este modo, nos aseguramos de que nuestros clientes reciban la máxima calidad al mejor precio.",
  "parrafo3": "Además de nuestra dedicación en el área Hortofrutícola, ofrecemos a nuestros agricultores asociados los diferentes productos y, el asesoramiento profesional para la aplicación de los tratamientos adecuados a sus campos y otros productos alimentarios, a través de nuestra área de Suministros."
};
},{}],"js/detalle.js":[function(require,module,exports) {
"use strict";

var _fiesta = _interopRequireDefault(require("../data/fiesta.json"));
var _gastronomia = _interopRequireDefault(require("../data/gastronomia.json"));
var _cultura = _interopRequireDefault(require("../data/cultura.json"));
var _ruchey = _interopRequireDefault(require("../data/ruchey.json"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const urlParams = new URLSearchParams(window.location.search);
const content = urlParams.get("det");
let data = "";
switch (content) {
  case "fiesta":
    data = _fiesta.default;
    break;
  case "gastronomia":
    data = _gastronomia.default;
    break;
  case "cultura":
    data = _cultura.default;
    break;
  case "ruchey":
    data = _ruchey.default;
    break;
}
document.addEventListener('DOMContentLoaded', () => {
  // Llenamos los datos del html
  const titulo = document.getElementById("title");
  const subtitulo = document.getElementById("subtitle");
  const fecha = document.getElementById("fecha");
  const media = document.getElementById("media");
  const tituloLista = document.getElementById("tituloLista");
  const lista = document.getElementById("lista");
  const parrafo1 = document.getElementById("parrafo1");
  const parrafo2 = document.getElementById("parrafo2");
  const parrafo3 = document.getElementById("parrafo3");
  titulo.innerHTML = data.titulo;
  subtitulo.innerHTML = data.subtitulo;
  fecha.innerHTML = data.fecha;
  media.src = data.media;
  tituloLista.innerHTML = data.tituloLista;
  let items = "";
  data.lista.forEach(li => {
    items += `<li>${li.acto} ${li.dia}</li>`;
  });
  lista.innerHTML = items;
  parrafo1.innerHTML = data.parrafo1;
  parrafo2.innerHTML = data.parrafo2;
  parrafo3.innerHTML = data.parrafo3;
});
},{"../data/fiesta.json":"data/fiesta.json","../data/gastronomia.json":"data/gastronomia.json","../data/cultura.json":"data/cultura.json","../data/ruchey.json":"data/ruchey.json"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53515" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/detalle.js"], null)
//# sourceMappingURL=/detalle.55c2c261.js.map