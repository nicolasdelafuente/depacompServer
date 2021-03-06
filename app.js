const express = require("express");
const app = express();
const sequelize = require("./database/db");
const cors = require("cors");
require("./database/asociaciones");

const PORT = process.env.PORT || 4000;

//Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/carreras", require("./routes/carrera.routes"));
app.use("/api/categorias", require("./routes/categoria.routes"));
app.use("/api/derivadores", require("./routes/derivador.routes"));
app.use("/api/entrevistas", require("./routes/entrevista.routes"));
app.use("/api/estados", require("./routes/estado.routes"));
app.use("/api/orientadores", require("./routes/orientador.routes"));
app.use("/api/personas", require("./routes/persona.routes"));
app.use("/api/sectores_derivacion", require("./routes/sectorDerivacion.routes"));
app.use("/api/seguimientos", require("./routes/seguimiento.routes"));
app.use("/api/tipos_documento", require("./routes/tipoDocumento.routes"));
app.use("/api/tipos_seguimiento", require("./routes/tipoSeguimiento.routes"));

//Arranque de servidor
app.listen(PORT, function () {
  console.log(`La app arranca en http://35.247.230.28:${PORT}`);

  // Conectase a la base de datos
  // Force true: DROP TABLES
  sequelize
    .sync({ force: false })
    .then(() => {
      console.log("Conexión exitosa");
    })
    .catch((error) => {
      console.log("Falló conexión, error: ", error);
    });
});
