const db = require("../../models");
const Slider = db.slider;

exports.createslider = async (req, res) => {
  try {
    const { title, text } = req.body;
    const data = {
      title,
      text,
      image: req.file ? req.file.path || "" : "",
    };

    console.log("slider", data);
    const slider = await Slider.create(data);

    res.status(200).send({
      status: "Success",
      message: "Successfully created slider",
      data: slider,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};

exports.getAllslider = async (req, res) => {
  try {
    const slider = await Slider.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully got all slider",
      data: slider,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
exports.singleslider = async (req, res) => {
  try {
    const { id } = req.para;
    s;

    const slider = await Slider.findOne({
      where: { Id: id },
    });

    if (!slider) {
      return res.status(401).send({
        status: "fail",
        message: "No slider found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully got your slider",
      data: slider,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
exports.deleteslider = async (req, res) => {
  try {
    const { id } = req.params;

    const slider = await Slider.destroy({
      where: { Id: id },
    });

    if (!slider) {
      return res.status(401).send({
        status: "fail",
        message: "No slider found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully delete your slider",
      data: slider,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};

exports.updateslider = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, text } = req.body;
    const data = {
      title,
      text,
      image: req.file ? req.file.path || "" : "",
    };
    const slider = await Slider.update(data, {
      where: { Id: id },
    });

    if (!slider) {
      return res.status(401).send({
        status: "fail",
        message: "No slider found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully update your slider",
      data: slider,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
