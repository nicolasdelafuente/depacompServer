import Entrevistas from "../models/Entrevistas";

export async function getEntrevistas(req, res) {
  try {
    const entrevistas = await Entrevistas.findAll();
    res.json({
      data: entrevistas,
    });
  } catch (error) {
    console.log(error);
  }
}
