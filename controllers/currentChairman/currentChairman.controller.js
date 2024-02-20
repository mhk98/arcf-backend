const db = require("../../models");
const CurrentChairman = db.currentChairman;

exports.createCurrentChairman = async (req, res) => {
  try {
    const { title, text, name } = req.body;
    const data = {
      title,
      name,
      text,
      image: req.file ? req.file.path || "" : "",
    };

    console.log(data);
    const result = await CurrentChairman.create(data);

    res.status(200).send({
      status: "Success",
      message: "Successfully created CurrentChairman",
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

exports.getAllCurrentChairman = async (req, res) => {
  try {
    const result = await CurrentChairman.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully got all CurrentChairman",
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
exports.singleCurrentChairman = async (req, res) => {
  try {
    const { id } = req.params;

    const CurrentChairman = await CurrentChairman.findOne({
      where: { Id: id },
    });

    if (!CurrentChairman) {
      return res.status(401).send({
        status: "fail",
        message: "No CurrentChairman found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully got your CurrentChairman",
      data: CurrentChairman,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
exports.deleteCurrentChairman = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await CurrentChairman.destroy({
      where: { Id: id },
    });

    if (!result) {
      return res.status(401).send({
        status: "fail",
        message: "No CurrentChairman found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully delete your CurrentChairman",
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

exports.updateCurrentChairman = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, text, name } = req.body;

    const data = {
      title: title === "" ? undefined : title,
      name: name === "" ? undefined : name,
      text: text === "" ? undefined : text,
      image: req.file === undefined ? undefined : req.file.path,
    };

    const result = await CurrentChairman.update(data, {
      where: { Id: id },
    });

    if (!result) {
      return res.status(401).send({
        status: "fail",
        message: "No CurrentChairman found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully update your CurrentChairman",
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
