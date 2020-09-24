import Orientadores from "../models/Orientadores";

export async function getOrientadores(req, res) {
  try {
    const orientadores = await Orientadores.findAll();
    res.json({
      data: orientadores,
    });
  } catch (error) {
    console.log(error);
  }
}
