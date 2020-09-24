import Seguimientos from "../models/Seguimientos";

export async function getSeguimientos(req, res) {
  try {
    const seguimientos = await Seguimientos.findAll();
    res.json({
      data: seguimientos,
    });
  } catch (error) {
    console.log(error);
  }
}
