import Tipos_documentos from "../models/tipos_documentos";

export async function getTipos_documentos(req, res) {
  try {
    const tipos_documentos = await Tipos_documentos.findAll();
    res.json({
      data: tipos_documentos,
    });
  } catch (error) {
    console.log(object);
  }
}
