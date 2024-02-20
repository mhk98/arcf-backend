const db = require("../../models");
const Director = db.director;

exports.createDirector = async (req, res) => {
  try {
    const { title, text, name } = req.body;

    console.log(req.body);
    const data = {
      title,
      name,
      text,
      image: req.file ? req.file.path || "" : "",
    };
    const result = await Director.create(data);

    res.status(200).send({
      status: "Success",
      message: "Successfully created Director",
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

exports.getAllDirector = async (req, res) => {
  try {
    const result = await Director.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully got all Director",
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
exports.singleDirector = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Director.findOne({
      where: { Id: id },
    });

    if (!result) {
      return res.status(401).send({
        status: "fail",
        message: "No Director found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully got your Director",
      data: Director,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
exports.deleteDirector = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Director.destroy({
      where: { Id: id },
    });

    if (!result) {
      return res.status(401).send({
        status: "fail",
        message: "No Director found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully delete your Director",
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

exports.updateDirector = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, text, name } = req.body;

    const data = {
      title: title === "" ? undefined : title,
      name: name === "" ? undefined : name,
      text: text === "" ? undefined : text,
      image: req.file === undefined ? undefined : req.file.path,
    };

    const result = await Director.update(data, {
      where: { Id: id },
    });

    if (!result) {
      return res.status(401).send({
        status: "fail",
        message: "No Director found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully update your Director",
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
