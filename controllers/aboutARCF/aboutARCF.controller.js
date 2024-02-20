const db = require("../../models");
const AboutARCF = db.aboutARCF;

exports.createaboutARCF = async (req, res) => {
  try {
    const { title, text, heading, point1, point2, point3 } = req.body;
    const { image1, image2 } = req.files || {};

    const data = {
      point1,
      point2,
      point3,
      title,
      text,
      heading,
      image1: image1 && image1[0] ? image1[0].path || "" : "",
      image2: image2 && image2[0] ? image2[0].path || "" : "",
    };
    const aboutARCF = await AboutARCF.create(data);

    res.status(200).send({
      status: "Success",
      message: "Successfully created aboutARCF",
      data: aboutARCF,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};

exports.getAllaboutARCF = async (req, res) => {
  try {
    const aboutARCF = await AboutARCF.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully got all aboutARCF",
      data: aboutARCF,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
exports.singleaboutARCF = async (req, res) => {
  try {
    const { id } = req.params;

    const aboutARCF = await AboutARCF.findOne({
      where: { Id: id },
    });

    if (!aboutARCF) {
      return res.status(401).send({
        status: "fail",
        message: "No aboutARCF found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully got your aboutARCF",
      data: aboutARCF,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
exports.deleteaboutARCF = async (req, res) => {
  try {
    const { id } = req.params;

    const aboutARCF = await AboutARCF.destroy({
      where: { Id: id },
    });

    if (!aboutARCF) {
      return res.status(401).send({
        status: "fail",
        message: "No aboutARCF found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully delete your aboutARCF",
      data: aboutARCF,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};

exports.updateaboutARCF = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, text, heading, point1, point2, point3 } = req.body;
    const { image1, image2 } = req.files;

    const data = {
      title: title === "" ? undefined : title,
      heading: heading === "" ? undefined : heading,
      text: text === "" ? undefined : text,
      point1: point1 === "" ? undefined : point1,
      point2: point2 === "" ? undefined : point2,
      point3: point3 === "" ? undefined : point3,
      image1: image1 && image1[0].path,
      image2: image2 && image2[0].path,
    };
    const result = await AboutARCF.update(data, {
      where: { Id: id },
    });

    if (!result) {
      return res.status(401).send({
        status: "fail",
        message: "No aboutARCF found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully update your aboutARCF",
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
