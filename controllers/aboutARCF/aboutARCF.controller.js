const db = require("../../models");
const AboutARCF = db.aboutARCF;

exports.createaboutARCF = async (req, res) => {
  try {
    const { title, text, name } = req.body;
    const data = {
      title,
      text,
      name,
      image: req.file ? req.file.path || "" : "",
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
    const { title, text } = req.body;
    const data = {
      title,
      text,
      image: req.file ? req.file.path || "" : "",
    };
    const aboutARCF = await AboutARCF.update(data, {
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
      message: "Successfully update your aboutARCF",
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
