const db = require("../../models");
const HealthDetails = db.healthDetails;
const Projects = db.projects;

exports.createhealthDetails = async (req, res) => {
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

    const healthDetails = await HealthDetails.create(data);

    res.status(200).send({
      status: "Success",
      message: "Successfully created healthDetails",
      data: healthDetails,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};

exports.getAllhealthDetails = async (req, res) => {
  try {
    const healthDetails = await HealthDetails.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully got all healthDetails",
      data: healthDetails,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
exports.singlehealthDetails = async (req, res) => {
  try {
    const { id } = req.params;

    const healthDetails = await HealthDetails.findOne({
      where: { category: id },
    });

    if (!healthDetails) {
      return res.status(401).send({
        status: "fail",
        message: "No healthDetails found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully got your healthDetails",
      data: healthDetails,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
exports.deletehealthDetails = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("deleteHealthDetails");

    const healthDetails = await HealthDetails.destroy({
      where: { category: id },
    });

    if (!healthDetails) {
      return res.status(401).send({
        status: "fail",
        message: "No healthDetails found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully delete your healthDetails",
      data: healthDetails,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};

exports.updatehealthDetails = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("updatehealthDetails", id);
    const { title, text } = req.body;
    const data = {
      title: title === "" ? undefined : title,
      text: text === "" ? undefined : text,
      image: req.file === undefined ? undefined : req.file.path,
    };
    const healthDetails = await HealthDetails.update(data, {
      where: { category: id },
    });

    res.status(200).send({
      status: "Success",
      message: "Successfully update your healthDetails",
      data: healthDetails,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
