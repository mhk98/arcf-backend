const db = require("../../models");
const ProjectDetails = db.projectDetails;

exports.createprojectDetails = async (req, res) => {
  try {
    const { title, text } = req.body;
    const data = {
      title,
      text,
      image: req.file ? req.file.path || "" : "",
    };

    console.log("projectDetails", data);
    const projectDetails = await ProjectDetails.create(data);

    res.status(200).send({
      status: "Success",
      message: "Successfully created projectDetails",
      data: projectDetails,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};

exports.getAllprojectDetails = async (req, res) => {
  try {
    const projectDetails = await ProjectDetails.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully got all projectDetails",
      data: projectDetails,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
exports.singleprojectDetails = async (req, res) => {
  try {
    const { id } = req.params;
    s;

    const projectDetails = await ProjectDetails.findOne({
      where: { Id: id },
    });

    if (!projectDetails) {
      return res.status(401).send({
        status: "fail",
        message: "No projectDetails found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully got your projectDetails",
      data: projectDetails,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
exports.deleteprojectDetails = async (req, res) => {
  try {
    const { id } = req.params;

    const projectDetails = await ProjectDetails.destroy({
      where: { Id: id },
    });

    if (!projectDetails) {
      return res.status(401).send({
        status: "fail",
        message: "No projectDetails found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully delete your projectDetails",
      data: projectDetails,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};

exports.updateprojectDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, text } = req.body;
    const data = {
      title: title === "" ? undefined : title,
      text: text === "" ? undefined : text,
      image: req.file === undefined ? undefined : req.file.path,
    };
    const projectDetails = await ProjectDetails.update(data, {
      where: { Id: id },
    });

    if (!projectDetails) {
      return res.status(401).send({
        status: "fail",
        message: "No projectDetails found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully update your projectDetails",
      data: projectDetails,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
