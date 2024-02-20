const db = require("../../models");
const AboutBanner = db.aboutBanner;

exports.createAboutBanner = async (req, res) => {
  try {
    const { title } = req.body;

    const { image1, image2, image3 } = req.files || {};

    const data = {
      title,
      image1: image1 && image1[0] ? image1[0].path || "" : "",
      image2: image2 && image2[0] ? image2[0].path || "" : "",
      image3: image3 && image3[0] ? image3[0].path || "" : "",
    };

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

exports.getAllAboutBanner = async (req, res) => {
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
exports.singleAboutBanner = async (req, res) => {
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
exports.deleteAboutBanner = async (req, res) => {
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

exports.updateAboutBanner = async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;
    console.log(id, title);
    const { image1, image2, image3 } = req.files || {};

    const data = {
      title: title === "" ? undefined : title,
      image1: image1 && image1[0].path,
      image2: image2 && image2[0].path,
      image3: image3 && image3[0].path,
    };

    const aboutBanner = await AboutBanner.update(data, {
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
