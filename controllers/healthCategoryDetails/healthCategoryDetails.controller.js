const db = require("../../models");
const HealthCategoryDetails = db.healthCategoryDetails;
const Health = db.health;

exports.createhealthCategoryDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, attributeName, category } = req.body;

    const healthData = await Health.findOne({ where: { Id: id } });
    const data = {
      healthId: healthData.Id,
      title,
      category,
      attributeName,
      image: req.file ? req.file.path || "" : "",
    };

    const healthCategoryDetails = await HealthCategoryDetails.create(data);

    res.status(200).send({
      status: "Success",
      message: "Successfully created healthCategoryDetails",
      data: healthCategoryDetails,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};

exports.getAllhealthCategoryDetails = async (req, res) => {
  try {
    const healthCategoryDetails = await HealthCategoryDetails.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully got all healthCategoryDetails",
      data: healthCategoryDetails,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
exports.singlehealthCategoryDetails = async (req, res) => {
  try {
    const { id } = req.params;

    console.log("healthParams", id);
    const healthCategoryDetails = await HealthCategoryDetails.findOne({
      where: { healthId: id },
    });

    if (!healthCategoryDetails) {
      return res.status(401).send({
        status: "fail",
        message: "No healthCategoryDetails found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully got your healthCategoryDetails",
      data: healthCategoryDetails,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
exports.deletehealthCategoryDetails = async (req, res) => {
  try {
    const { id } = req.params;

    console.log("healthId", id);
    const healthCategoryDetails = await HealthCategoryDetails.destroy({
      where: { healthId: id },
    });

    res.status(200).send({
      status: "Success",
      message: "Successfully delete your healthCategoryDetails",
      data: healthCategoryDetails,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};

exports.updatehealthCategoryDetails = async (req, res) => {
  try {
    const { id } = req.params;

    const { title, attributeName, category } = req.body;
    const data = {
      title,
      category,
      attributeName,
      image: req.file ? req.file.path || "" : "",
    };
    const healthCategoryDetails = await HealthCategoryDetails.update(data, {
      where: { healthId: id },
    });

    res.status(200).send({
      status: "Success",
      message: "Successfully update your healthCategoryDetails",
      data: healthCategoryDetails,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
