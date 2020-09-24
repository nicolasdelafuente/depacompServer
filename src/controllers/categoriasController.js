import Categorias from "../models/Categorias";

export async function getCategorias(req, res) {
  try {
    const categorias = await Categorias.findAll();
    res.json({
      data: categorias,
    });
  } catch (error) {
    console.log(error);
  }
}
