const db = require("../../models");
const Events = db.events;

exports.createEvents = async (req, res) => {
  try {
    const { title, text, status } = req.body;
    console.log("createEvents", req.body);

    const data = {
      title,
      text,
      status,
      image: req.file ? req.file.path || "" : "",
    };
    const result = await Events.create(data);

    res.status(200).send({
      status: "Success",
      message: "Successfully created Events",
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

exports.getAllEvents = async (req, res) => {
  try {
    const result = await Events.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully got all Events",
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
exports.singleEvents = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Events.findOne({
      where: { Id: id },
    });

    if (!result) {
      return res.status(401).send({
        status: "fail",
        message: "No Events found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully got your Events",
      data: Events,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
exports.deleteEvents = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Events.destroy({
      where: { Id: id },
    });

    if (!result) {
      return res.status(401).send({
        status: "fail",
        message: "No Events found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully delete your Events",
      data: Events,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};

exports.updateEvents = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, text, status } = req.body;
    const data = {
      title: title === "" ? undefined : title,
      status: status === "" ? undefined : status,
      text: text === "" ? undefined : text,
      image: req.file === undefined ? undefined : req.file.path,
    };

    console.log("updateEvents", data);
    const result = await Events.update(data, {
      where: { Id: id },
    });

    if (!result) {
      return res.status(401).send({
        status: "fail",
        message: "No Events found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully update your Events",
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
