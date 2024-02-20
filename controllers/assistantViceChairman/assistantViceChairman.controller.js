const db = require("../../models");
const AssistantViceChairman = db.assistantViceChairman;

exports.createAssistantViceChairman = async (req, res) => {
  try {
    const { title, text, name } = req.body;
    const data = {
      title,
      name,
      text,
      image: req.file ? req.file.path || "" : "",
    };

    console.log(data);
    const result = await AssistantViceChairman.create(data);

    res.status(200).send({
      status: "Success",
      message: "Successfully created AssistantViceChairman",
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

exports.getAllAssistantViceChairman = async (req, res) => {
  try {
    const result = await AssistantViceChairman.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully got all AssistantViceChairman",
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
exports.singleAssistantViceChairman = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await AssistantViceChairman.findOne({
      where: { Id: id },
    });

    if (!result) {
      return res.status(401).send({
        status: "fail",
        message: "No AssistantViceChairman found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully got your AssistantViceChairman",
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
exports.deleteAssistantViceChairman = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await AssistantViceChairman.destroy({
      where: { Id: id },
    });

    if (!result) {
      return res.status(401).send({
        status: "fail",
        message: "No AssistantViceChairman found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully delete your AssistantViceChairman",
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

exports.updateAssistantViceChairman = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, text, name } = req.body;

    const data = {
      title: title === "" ? undefined : title,
      name: name === "" ? undefined : name,
      text: text === "" ? undefined : text,
      image: req.file === undefined ? undefined : req.file.path,
    };

    const result = await AssistantViceChairman.update(data, {
      where: { Id: id },
    });

    if (!result) {
      return res.status(401).send({
        status: "fail",
        message: "No AssistantViceChairman found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully update your AssistantViceChairman",
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
