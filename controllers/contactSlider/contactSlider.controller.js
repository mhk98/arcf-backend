const { sendMail } = require("../../middlewares/nodemailer");
const db = require("../../models");
const ContactSlider = db.contactSlider;

exports.createContactSlider = async (req, res) => {
  try {
    const { title } = req.body;

    const { image1, image2, image3 } = req.files || {};

    const data = {
      title,
      image1: image1 && image1[0] ? image1[0].path || "" : "",
      image2: image2 && image2[0] ? image2[0].path || "" : "",
      image3: image3 && image3[0] ? image3[0].path || "" : "",
    };
    // Create ContactSlider in the database
    const result = await ContactSlider.create(data);

    res.status(200).send({
      status: "Success",
      message: "Successfully created ContactSlider and sent email",
      data: result,
    });
  } catch (error) {
    console.error("Error:", error);

    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};

exports.getAllContactSlider = async (req, res) => {
  try {
    const result = await ContactSlider.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully got all ContactSlider",
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
exports.singleContactSlider = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await ContactSlider.findOne({
      where: { Id: id },
    });

    if (!result) {
      return res.status(401).send({
        status: "fail",
        message: "No ContactSlider found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully got your ContactSlider",
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
exports.deleteContactSlider = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await ContactSlider.destroy({
      where: { Id: id },
    });

    if (!result) {
      return res.status(401).send({
        status: "fail",
        message: "No ContactSlider found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully delete your ContactSlider",
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

exports.updateContactSlider = async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;
    const { image1, image2, image3 } = req.files || {};

    const data = {
      title: title === "" ? undefined : title,
      image1: image1 && image1[0].path,
      image2: image2 && image2[0].path,
      image3: image3 && image3[0].path,
    };
    const result = await ContactSlider.update(data, {
      where: { Id: id },
    });

    if (!result) {
      return res.status(401).send({
        status: "fail",
        message: "No ContactSlider found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully update your ContactSlider",
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
