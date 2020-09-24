import Derivadores from "../models/Derivadores";

export async function getDerivadores(req, res) {
  try {
    const derivadores = await Derivadores.findAll();
    res.json({
      data: derivadores,
    });
  } catch (error) {
    console.log(error);
  }
}
