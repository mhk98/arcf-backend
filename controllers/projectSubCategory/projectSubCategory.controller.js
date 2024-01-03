const db = require("../../models");
const ProjectSubCategory = db.projectSubCategory;
const Projects = db.projects;

exports.createProjectSubCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, text, category } = req.body;

    const projectData = await Projects.findOne({
      Where: {
        projectId: id,
      },
    });
    const data = {
      title,
      text,
      category,
      image: req.file ? req.file.path || "" : "",
    };
    const ProjectSubCategory = await ProjectSubCategory.create(data);

    res.status(200).send({
      status: "Success",
      message: "Successfully created ProjectSubCategory",
      data: ProjectSubCategory,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};

exports.getAllProjectSubCategory = async (req, res) => {
  try {
    const projectSubCategory = await ProjectSubCategory.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully got all health",
      data: projectSubCategory,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
exports.singleProjectSubCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const projectSubCategory = await ProjectSubCategory.findAll({
      where: { projectId: id },
    });

    if (!projectSubCategory) {
      return res.status(401).send({
        status: "fail",
        message: "No health found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully got your health",
      data: projectSubCategory,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
exports.deleteProjectSubCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const projectSubCategory = await ProjectSubCategory.destroy({
      where: { Id: id },
    });

    if (!projectSubCategory) {
      return res.status(401).send({
        status: "fail",
        message: "No health found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully delete your health",
      data: projectSubCategory,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};

exports.updateProjectSubCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const projectSubCategory = await ProjectSubCategory.update(data, {
      where: { Id: id },
    });

    if (!projectSubCategory) {
      return res.status(401).send({
        status: "fail",
        message: "No health found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully update your health",
      data: projectSubCategory,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
