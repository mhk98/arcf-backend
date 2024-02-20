const db = require("../../models");
const Faq = db.faq;

exports.createfaq = async (req, res) => {
  try {
    const result = await Faq.create(req.body);

    res.status(200).send({
      status: "Success",
      message: "Successfully created faq",
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

exports.getAllfaq = async (req, res) => {
  try {
    const result = await Faq.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully got all faq",
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
exports.singlefaq = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Faq.findOne({
      where: { Id: id },
    });

    if (!result) {
      return res.status(401).send({
        status: "fail",
        message: "No faq found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully got your faq",
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
exports.deletefaq = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Faq.destroy({
      where: { Id: id },
    });

    if (!result) {
      return res.status(401).send({
        status: "fail",
        message: "No faq found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully delete your faq",
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

exports.updatefaq = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Faq.update(req.body, {
      where: { Id: id },
    });

    if (!result) {
      return res.status(401).send({
        status: "fail",
        message: "No faq found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully update your faq",
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
