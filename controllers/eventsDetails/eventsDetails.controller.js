const db = require("../../models");
const EventsDetails = db.eventsDetails;

exports.createEventsDetails = async (req, res) => {
  try {
    const { title, text } = req.body;
    const data = {
      title,
      text,
      image: req.file ? req.file.path || "" : "",
    };

    console.log("EventsDetails", data);
    const result = await EventsDetails.create(data);

    res.status(200).send({
      status: "Success",
      message: "Successfully created EventsDetails",
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

exports.getAllEventsDetails = async (req, res) => {
  try {
    const result = await EventsDetails.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully got all EventsDetails",
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
exports.singleEventsDetails = async (req, res) => {
  try {
    const { id } = req.params;
    s;

    const result = await EventsDetails.findOne({
      where: { Id: id },
    });

    if (!result) {
      return res.status(401).send({
        status: "fail",
        message: "No EventsDetails found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully got your EventsDetails",
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
exports.deleteEventsDetails = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await EventsDetails.destroy({
      where: { Id: id },
    });

    if (!result) {
      return res.status(401).send({
        status: "fail",
        message: "No EventsDetails found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully delete your EventsDetails",
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

exports.updateEventsDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, text } = req.body;
    const data = {
      title: title === "" ? undefined : title,
      text: text === "" ? undefined : text,
      image: req.file === undefined ? undefined : req.file.path,
    };
    const result = await EventsDetails.update(data, {
      where: { Id: id },
    });

    if (!result) {
      return res.status(401).send({
        status: "fail",
        message: "No EventsDetails found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully update your EventsDetails",
      data: EventsDetails,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
