const db = require("../../models");
const Volunteer = db.volunteer;

exports.createVolunteer = async (req, res) => {
  try {
    const { name, designation } = req.body;
    const data = {
      name,
      designation,
      image: req.file ? req.file.path || "" : "",
    };
    const result = await Volunteer.create(data);

    res.status(200).send({
      status: "Success",
      message: "Successfully created Volunteer",
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

exports.getAllVolunteer = async (req, res) => {
  try {
    const result = await Volunteer.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully got all Volunteer",
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
exports.singleVolunteer = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Volunteer.findOne({
      where: { Id: id },
    });

    if (!result) {
      return res.status(401).send({
        status: "fail",
        message: "No Volunteer found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully got your Volunteer",
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
exports.deleteVolunteer = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("deleteVolunteer", id);
    const result = await Volunteer.destroy({
      where: { Id: id },
    });

    if (!result) {
      return res.status(401).send({
        status: "fail",
        message: "No Volunteer found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully delete your Volunteer",
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

exports.updateVolunteer = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, designation } = req.body;

    const data = {
      name: name === "" ? undefined : name,
      designation: designation === "" ? undefined : designation,
      image: req.file === undefined ? undefined : req.file.path,
    };
    const result = await Volunteer.update(data, {
      where: { Id: id },
    });

    if (!result) {
      return res.status(401).send({
        status: "fail",
        message: "No Volunteer found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully update your Volunteer",
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
