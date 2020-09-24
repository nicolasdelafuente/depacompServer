import Tipos_seguimientos from "../models/tipos_seguimientos";

export async function getTipos_seguimientos(req, res) {
  try {
    const tipos_seguimientos = await Tipos_seguimientos.findAll();
    res.json({
      data: tipos_seguimientos,
    });
  } catch (error) {
    console.log(error);
  }
}
