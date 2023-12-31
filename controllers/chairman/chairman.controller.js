const db = require("../../models");
const Chairman = db.chairman;

exports.createchairman = async (req, res) => {
  try {
    const { title, text } = req.body;
    const data = {
      title,
      text,
      image: req.file ? req.file.path || "" : "",
    };
    const chairman = await Chairman.create(data);

    res.status(200).send({
      status: "Success",
      message: "Successfully created chairman",
      data: chairman,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};

exports.getAllchairman = async (req, res) => {
  try {
    const chairman = await Chairman.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully got all chairman",
      data: chairman,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
exports.singlechairman = async (req, res) => {
  try {
    const { id } = req.params;

    const chairman = await Chairman.findOne({
      where: { Id: id },
    });

    if (!chairman) {
      return res.status(401).send({
        status: "fail",
        message: "No chairman found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully got your chairman",
      data: chairman,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
exports.deletechairman = async (req, res) => {
  try {
    const { id } = req.params;

    const chairman = await Chairman.destroy({
      where: { Id: id },
    });

    if (!chairman) {
      return res.status(401).send({
        status: "fail",
        message: "No chairman found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully delete your chairman",
      data: chairman,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};

exports.updatechairman = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, text } = req.body;
    const data = {
      title,
      text,
      image: req.file ? req.file.path || "" : "",
    };
    const chairman = await Chairman.update(data, {
      where: { Id: id },
    });

    if (!chairman) {
      return res.status(401).send({
        status: "fail",
        message: "No chairman found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully update your chairman",
      data: chairman,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
