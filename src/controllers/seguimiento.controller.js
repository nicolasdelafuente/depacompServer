import Seguimiento from "../models/Seguimiento";

export async function getSeguimientos(req, res) {
  try {
    const seguimientos = await Seguimiento.findAll({
      order: [["fecha", "ASC"]],
    });
    res.json({
      data: seguimientos,
      // Will order by max(age)
    });
  } catch (error) {
    console.log(error);
  }
}

export async function createSeguimiento(req, res) {
  const { fecha, name, motivo, estado, orientador, color_estado } = req.body;

  try {
    let nuevoSeguimiento = await Seguimiento.create(
      {
        fecha,
        name,
        motivo,
        estado,
        orientador,
        color_estado,
      },
      {
        fields: [
          "fecha",
          "name",
          "motivo",
          "estado",
          "orientador",
          "color_estado",
        ],
      }
    );

    if (nuevoSeguimiento) {
      return res.json({
        message: "Seguimiento creado",
        data: nuevoSeguimiento,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Algo salió mal", data: {} });
  }
}

export async function getSeguimiento(req, res) {
  const { id } = req.params;
  const seguimiento = await Seguimiento.findOne({
    where: {
      id: id,
    },
  });
  res.json({
    data: seguimiento,
  });
}

export async function deleteSeguimiento(req, res) {
  const { id } = req.params;
  const seguimientoEliminado = await Seguimiento.destroy({
    where: {
      id: id,
    },
  });
  res.json({
    message: "Seguimiento eliminado",
    count: seguimientoEliminado,
  });
}

export async function updateSeguimiento(req, res) {
  const { id } = req.params;
  const { fecha, name, motivo, estado, orientador, color_estado } = req.body;

  const seguimientos = await Seguimiento.findAll({
    attributes: [
      "fecha",
      "name",
      "motivo",
      "estado",
      "orientador",
      "color_estado",
    ],
    where: { id },
  });

  if (seguimientos.length > 0) {
    seguimientos.forEach(async (seguimiento) => {
      await seguimiento.update({
        fecha,
        name,
        motivo,
        estado,
        orientador,
        color_estado,
      });
    });
  }
  return res.json({
    message: "Project updated Successfully",
    date: seguimientos,
  });
}
