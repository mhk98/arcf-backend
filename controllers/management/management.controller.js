const db = require("../../models");
const Management = db.management;

exports.createManagement = async (req, res) => {
  try {
    const { name, designation } = req.body;
    const data = {
      name,
      designation,
      image: req.file ? req.file.path || "" : "",
    };
    const result = await Management.create(data);

    res.status(200).send({
      status: "Success",
      message: "Successfully created Management",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};

exports.getAllManagement = async (req, res) => {
  try {
    const result = await Management.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully got all Management",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
exports.singleManagement = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Management.findOne({
      where: { Id: id },
    });

    if (!result) {
      return res.status(401).send({
        status: "fail",
        message: "No Management found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully got your Management",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
exports.deleteManagement = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Management.destroy({
      where: { Id: id },
    });

    if (!result) {
      return res.status(401).send({
        status: "fail",
        message: "No Management found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully delete your Management",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};

exports.updateManagement = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, designation } = req.body;

    const data = {
      name: name === "" ? undefined : name,
      designation: designation === "" ? undefined : designation,
      image: req.file === undefined ? undefined : req.file.path,
    };
    const result = await Management.update(data, {
      where: { Id: id },
    });

    if (!result) {
      return res.status(401).send({
        status: "fail",
        message: "No Management found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully update your Management",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
