import express, { json } from "express";
import morgan from "morgan";
import seguimientoRoutes from "./routes/seguimientos";

//Inicializción
const app = express();

//middlewares
//muestro por consola lo que va llegando.
app.use(morgan("dev"));
//el servidor puede entender los archivos.json
app.use(json());

//rutas
app.use("/api/seguimientos", seguimientoRoutes);

export default app;
