const db = require("../../models");
const AboutBanner = db.aboutBanner;

exports.createaboutBanner = async (req, res) => {
  try {
    const { title } = req.body;
    const data = {
      title,
      image: req.file ? req.file.path || "" : "",
    };

    console.log(title);
    const aboutBanner = await AboutBanner.create(data);

    res.status(200).send({
      status: "Success",
      message: "Successfully created aboutBanner",
      data: aboutBanner,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};

exports.getAllaboutBanner = async (req, res) => {
  try {
    const aboutBanner = await AboutBanner.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully got all aboutBanner",
      data: aboutBanner,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
exports.singleaboutBanner = async (req, res) => {
  try {
    const { id } = req.params;

    const aboutBanner = await AboutBanner.findOne({
      where: { Id: id },
    });

    if (!aboutBanner) {
      return res.status(401).send({
        status: "fail",
        message: "No aboutBanner found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully got your aboutBanner",
      data: aboutBanner,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
exports.deleteaboutBanner = async (req, res) => {
  try {
    const { id } = req.params;

    const aboutBanner = await AboutBanner.destroy({
      where: { Id: id },
    });

    if (!aboutBanner) {
      return res.status(401).send({
        status: "fail",
        message: "No aboutBanner found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully delete your aboutBanner",
      data: aboutBanner,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};

exports.updateaboutBanner = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, text } = req.body;
    const data = {
      title,
      text,
      image: req.file ? req.file.path || "" : "",
    };
    const aboutBanner = await aboutBanner.update(data, {
      where: { Id: id },
    });

    if (!aboutBanner) {
      return res.status(401).send({
        status: "fail",
        message: "No aboutBanner found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully update your aboutBanner",
      data: aboutBanner,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
