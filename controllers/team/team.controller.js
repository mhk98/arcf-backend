const db = require("../../models");
const Team = db.team;

exports.createteam = async (req, res) => {
  try {
    const { title, text } = req.body;
    const data = {
      title,
      text,
      image: req.file.path,
    };
    const team = await Team.create(data);

    res.status(200).send({
      status: "Success",
      message: "Successfully created team",
      data: team,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};

exports.getAllteam = async (req, res) => {
  try {
    const team = await Team.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully got all team",
      data: team,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
exports.singleteam = async (req, res) => {
  try {
    const { id } = req.params;

    const team = await Team.findOne({
      where: { Id: id },
    });

    if (!team) {
      return res.status(401).send({
        status: "fail",
        message: "No team found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully got your team",
      data: team,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
exports.deleteteam = async (req, res) => {
  try {
    const { id } = req.params;

    const team = await Team.destroy({
      where: { Id: id },
    });

    if (!team) {
      return res.status(401).send({
        status: "fail",
        message: "No team found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully delete your team",
      data: team,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};

exports.updateteam = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, text } = req.body;
    const data = {
      title,
      text,
      image: req.file.path,
    };
    const team = await Team.update(data, {
      where: { Id: id },
    });

    if (!team) {
      return res.status(401).send({
        status: "fail",
        message: "No team found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully update your team",
      data: team,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
