// PAra configurar el servidor
import express, { json } from "express";
import morgan from "morgan";

//Importando routes

import carrerasRoutes from "./routes/carreras";
import categoriasRoutes from "./routes/categorias";
import derivadoresRoutes from "./routes/derivadores";
import entrevistasRoutes from "./routes/entrevistas";
import estadosRoutes from "./routes/estados";
import orientadoresRoutes from "./routes/orientadores";
import personasRoutes from "./routes/personas";
import sector_derivacionesRoutes from "./routes/sector_derivaciones";
import seguimientosRoutes from "./routes/seguimientos";
import tipos_documentosRoutes from "./routes/tipos_documentos";
import tipos_seguimeintosRoutes from "./routes/tipos_seguimientos";

const cors = require("cors");

//Inicialización
const app = express();

// Middlewares
app.use(cors());
app.use(morgan('dev')); //Para ver las peticiones que van llegando.
app.use(json()); //Para entender el formato .json.

//routes.
app.use("/api/carreras", carrerasRoutes);
app.use("/api/categorias", categoriasRoutes);
app.use("/api/derivadores", derivadoresRoutes);
app.use("/api/entrevistas", entrevistasRoutes);
app.use("/api/estados", estadosRoutes);
app.use("/api/orientadores", orientadoresRoutes);
app.use("/api/personas", personasRoutes);
app.use("/api/sector_derivaciones", sector_derivacionesRoutes);
app.use("/api/seguimientos", seguimientosRoutes);
app.use("/api/tipos_documentos", tipos_documentosRoutes);
app.use("/api/tipos_seguimientos", tipos_seguimeintosRoutes);

export default app;
