const db = require("../../models");
const Faq = db.faq;

exports.createfaq = async (req, res) => {
  try {
    const faq = await Faq.create(req.body);

    res.status(200).send({
      status: "Success",
      message: "Successfully created faq",
      data: faq,
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
    const faq = await Faq.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully got all faq",
      data: faq,
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

    const faq = await Faq.findOne({
      where: { Id: id },
    });

    if (!faq) {
      return res.status(401).send({
        status: "fail",
        message: "No faq found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully got your faq",
      data: faq,
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

    const faq = await Faq.destroy({
      where: { Id: id },
    });

    if (!faq) {
      return res.status(401).send({
        status: "fail",
        message: "No faq found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully delete your faq",
      data: faq,
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

    const faq = await faq.update(req.body, {
      where: { Id: id },
    });

    if (!faq) {
      return res.status(401).send({
        status: "fail",
        message: "No faq found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully update your faq",
      data: faq,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
