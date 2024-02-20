const db = require("../../models");
const ViceChairman = db.viceChairman;

exports.createViceChairman = async (req, res) => {
  try {
    const { title, text, name } = req.body;
    const data = {
      title,
      name,
      text,
      image: req.file ? req.file.path || "" : "",
    };

    console.log(data);
    const result = await ViceChairman.create(data);

    res.status(200).send({
      status: "Success",
      message: "Successfully created ViceChairman",
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

exports.getAllViceChairman = async (req, res) => {
  try {
    const result = await ViceChairman.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully got all ViceChairman",
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
exports.singleViceChairman = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await ViceChairman.findOne({
      where: { Id: id },
    });

    if (!result) {
      return res.status(401).send({
        status: "fail",
        message: "No ViceChairman found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully got your ViceChairman",
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
exports.deleteViceChairman = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await ViceChairman.destroy({
      where: { Id: id },
    });

    if (!result) {
      return res.status(401).send({
        status: "fail",
        message: "No ViceChairman found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully delete your ViceChairman",
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

exports.updateViceChairman = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, text, name } = req.body;
    const data = {
      title: title === "" ? undefined : title,
      name: name === "" ? undefined : name,
      text: text === "" ? undefined : text,
      image: req.file === undefined ? undefined : req.file.path,
    };

    const result = await ViceChairman.update(data, {
      where: { Id: id },
    });

    if (!result) {
      return res.status(401).send({
        status: "fail",
        message: "No ViceChairman found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully update your ViceChairman",
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
