const express = require("express");
const app = express();
const pool = require("./server/db.js");
const { restart } = require("nodemon");

app.use(express.json()); //es para tenerl body del json

//Routes//

//Crear una linea//
app.post("/entrevista", async (req, res) => {
  try {
    const { nombre, descripcion } = req.body;
    const newEntrevista = await pool.query(
      "INSERT INTO dpto.entrevista (nombre, descripcion) VALUES ($1, $2) RETURNING *",
      [nombre, descripcion]
    );
    res.json(newEntrevista);
  } catch (err) {
    console.error(err.message);
  }
});

// pool.connect((err,db,done)=>{
//     if(err){
//         return console.log(err);
//     }
//     else{
//         const nombre = "Eduardo";
//         const descripcion = "Es el cuervo del equipo";

//         db.query("INSERT INTO dpto.entrevista (nombre, descrfipcion) VALUES ($1, $2) RETURNING *",
//             [nombre,descripcion]);
//             done();
//             if(err){
//                 return console.log(err);
//             }
//             else{
//                 console.log(table.rows);
//                 db.end();
//             }
//     }
// })

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
