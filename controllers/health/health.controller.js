const db = require("../../models");
const Health = db.health;
const Projects = db.projects;

exports.createhealth = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, text } = req.body;

    const projectData = await Projects.findOne({
      Where: {
        projectId: id,
      },
    });
    const data = {
      title,
      text,
      image: req.file.path,
      projectId: projectData.Id,
    };
    const health = await Health.create(data);

    res.status(200).send({
      status: "Success",
      message: "Successfully created health",
      data: health,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};

exports.getAllhealth = async (req, res) => {
  try {
    const health = await Health.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully got all health",
      data: health,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
exports.singlehealth = async (req, res) => {
  try {
    const { id } = req.params;

    const health = await Health.findOne({
      where: { Id: id },
    });

    if (!health) {
      return res.status(401).send({
        status: "fail",
        message: "No health found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully got your health",
      data: health,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
exports.deletehealth = async (req, res) => {
  try {
    const { id } = req.params;

    const health = await Health.destroy({
      where: { Id: id },
    });

    if (!health) {
      return res.status(401).send({
        status: "fail",
        message: "No health found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully delete your health",
      data: health,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};

exports.updatehealth = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const health = await Health.update(data, {
      where: { Id: id },
    });

    if (!health) {
      return res.status(401).send({
        status: "fail",
        message: "No health found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully update your health",
      data: health,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
