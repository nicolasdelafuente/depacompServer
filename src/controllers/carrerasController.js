import Carreras from "../models/Carreras";

export async function getCarreras(req, res) {
  try {
    const carreras = await Carreras.findAll();
    res.json({
      data: carreras,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function createCarreras(req, res) {
  const { carrera_nombre, carrera_departamento, carrera_director } = req.body;
  try {
    let newCarrera = await Carreras.create({
      carrera_nombre,
      carrera_departamento,
      carrera_director
    }, {
      fields: ['carrera_nombre', 'carrera_departamento', 'carrera_director']//Datos que le voy a pasar
    });
    if (newCarrera) {
      return res.json({
        message: "Carrera creada correctamente",
        data: newCarrera
      });
    }
  } catch (error) {
    res.status(500).json(
      {
        message: "Algo anduvo mal",
        data: {}
      }
    )
  }
}