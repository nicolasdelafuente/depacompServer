"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireWildcard(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _carreras = _interopRequireDefault(require("./routes/carreras"));

var _categorias = _interopRequireDefault(require("./routes/categorias"));

var _derivadores = _interopRequireDefault(require("./routes/derivadores"));

var _entrevistas = _interopRequireDefault(require("./routes/entrevistas"));

var _estados = _interopRequireDefault(require("./routes/estados"));

var _orientadores = _interopRequireDefault(require("./routes/orientadores"));

var _personas = _interopRequireDefault(require("./routes/personas"));

var _sector_derivaciones = _interopRequireDefault(require("./routes/sector_derivaciones"));

var _seguimientos = _interopRequireDefault(require("./routes/seguimientos"));

var _tipos_documentos = _interopRequireDefault(require("./routes/tipos_documentos"));

var _tipos_seguimientos = _interopRequireDefault(require("./routes/tipos_seguimientos"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// PAra configurar el servidor
//Importando routes
var cors = require("cors"); //Inicialización


var app = (0, _express["default"])(); // Middlewares

app.use(cors());
app.use((0, _morgan["default"])('dev')); //Para ver las peticiones que van llegando.

app.use((0, _express.json)()); //Para entender el formato .json.
//routes.

app.use("/api/carreras", _carreras["default"]);
app.use("/api/categorias", _categorias["default"]);
app.use("/api/derivadores", _derivadores["default"]);
app.use("/api/entrevistas", _entrevistas["default"]);
app.use("/api/estados", _estados["default"]);
app.use("/api/orientadores", _orientadores["default"]);
app.use("/api/personas", _personas["default"]);
app.use("/api/sector_derivaciones", _sector_derivaciones["default"]);
app.use("/api/seguimientos", _seguimientos["default"]);
app.use("/api/tipos_documentos", _tipos_documentos["default"]);
app.use("/api/tipos_seguimientos", _tipos_seguimientos["default"]);
var _default = app;
exports["default"] = _default;