import Project from "../models/Project";

export async function getProjects(req, res) {
  try {
    const projects = await Project.findAll();
    res.json({
      data: projects,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
  }
}

export async function createProject(req, res) {
  const { name, priority, description, deliverydate } = req.body;
  try {
    let newProject = await Project.create(
      {
        name,
        priority,
        description,
        deliverydate,
      },
      {
        fields: ["name", "priority", "description", "deliverydate"],
      }
    );
    if (newProject) {
      return res.json({
        message: "Project created successfully",
        data: { newProject },
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
  }
}

export async function getOneProject(req, res) {
  const { id } = req.params;
  const project = await Project.findOne({
    where: {
      id: id,
    },
  });
  res.json({
    data: project,
  });
}

export async function deleteOneProject(req, res) {
  const { id } = req.params;
  const deleteRowCount = await Project.destroy({
    where: {
      id,
    },
  });
  res.json({
    message: "Project Deleted successfuly",
    count: deleteRowCount,
  });
}

export async function updateProject(req, res) {
  const { id } = req.params;
  const { name, priority, description, deliverydate } = req.body;

  const projects = await Project.findAll({
    attributes: ["id", "name", "priority", "description", "deliverydate"],
    where: { id },
  });

  if (projects.length > 0) {
    projects.forEach(async (projects) => {
      await projects.update({
        name,
        priority,
        description,
        deliverydate,
      });
    });
  }
  return res.json({
    message: "Project updated Successfully",
    date: projects,
  });
}
