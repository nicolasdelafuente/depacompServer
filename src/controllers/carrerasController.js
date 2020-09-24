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
