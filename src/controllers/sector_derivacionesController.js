import Sector_derivaciones from "../models/Sector_derivaciones";

export async function getSector_derivaciones(req, res) {
  try {
    const sector_derivaciones = await Sector_derivaciones.findAll();
    res.json({
      data: sector_derivaciones,
    });
  } catch (error) {
    console.log(error);
  }
}
