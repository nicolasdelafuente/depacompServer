import Personas from "../models/Personas";

export async function getPersonas(req, res) {
  try {
    const personas = await Personas.findAll();
    res.json({
      data: personas,
    });
  } catch (error) {
    console.log(error);
  }
}
