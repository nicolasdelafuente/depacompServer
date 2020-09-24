import Estados from "../models/Estados";

export async function getEstados(req, res) {
  try {
    const estados = await Estados.findAll();
    res.json({
      data: estados,
    });
  } catch (error) {
    console.log(error);
  }
}
