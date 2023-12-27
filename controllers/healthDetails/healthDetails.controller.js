const db = require("../../models");
const HealthDetails = db.healthDetails;

exports.createhealthDetails = async (req, res) => {
  try {
    const healthDetails = await HealthDetails.create(req.body);

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
      where: { Id: id },
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

    const healthDetails = await healthDetails.destroy({
      where: { Id: id },
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
    const data = req.body;
    const healthDetails = await healthDetails.update(data, {
      where: { Id: id },
    });

    if (!healthDetails) {
      return res.status(401).send({
        status: "fail",
        message: "No healthDetails found",
      });
    }
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
