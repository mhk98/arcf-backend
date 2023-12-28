const db = require("../../models");
const Projects = db.projects;

exports.createprojects = async (req, res) => {
  try {
    const { title, text } = req.body;

    const data = {
      title,
      text,
      image: req.file.path,
    };
    const projects = await Projects.create(data);

    res.status(200).send({
      status: "Success",
      message: "Successfully created projects",
      data: projects,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};

exports.getAllprojects = async (req, res) => {
  try {
    const projects = await Projects.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully got all projects",
      data: projects,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
exports.singleprojects = async (req, res) => {
  try {
    const { id } = req.params;

    const projects = await Projects.findOne({
      where: { Id: id },
    });

    if (!projects) {
      return res.status(401).send({
        status: "fail",
        message: "No projects found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully got your projects",
      data: projects,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
exports.deleteprojects = async (req, res) => {
  try {
    const { id } = req.params;

    const projects = await Projects.destroy({
      where: { Id: id },
    });

    if (!projects) {
      return res.status(401).send({
        status: "fail",
        message: "No projects found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully delete your projects",
      data: projects,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};

exports.updateprojects = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const projects = await Projects.update(data, {
      where: { Id: id },
    });

    if (!projects) {
      return res.status(401).send({
        status: "fail",
        message: "No projects found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully update your projects",
      data: projects,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
