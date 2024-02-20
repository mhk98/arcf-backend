const db = require("../../models");
const News = db.news;

exports.createNews = async (req, res) => {
  try {
    const { title, text, status } = req.body;
    console.log("createNews", req.body);

    const data = {
      title,
      text,
      status,
      image: req.file ? req.file.path || "" : "",
    };
    const result = await News.create(data);

    res.status(200).send({
      status: "Success",
      message: "Successfully created News",
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

exports.getAllNews = async (req, res) => {
  try {
    const result = await News.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully got all News",
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
exports.getCategoryNews = async (req, res) => {
  try {
    const { statusId } = req.params();

    const result = await News.findAll({
      where: { status: statusId },
    });

    res.status(200).send({
      status: "Success",
      message: "Successfully got all News",
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

exports.singleNews = async (req, res) => {
  try {
    const { status } = req.params;

    const result = await News.findOne({
      where: { status: id },
    });

    if (!result) {
      return res.status(401).send({
        status: "fail",
        message: "No News found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully got your News",
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
exports.deleteNews = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await News.destroy({
      where: { Id: id },
    });

    if (!result) {
      return res.status(401).send({
        status: "fail",
        message: "No News found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully delete your News",
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

exports.updateNews = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, text, status } = req.body;
    const data = {
      title: title === "" ? undefined : title,
      text: text === "" ? undefined : text,
      status: status === "" ? undefined : status,
      image: req.file === undefined ? undefined : req.file.path,
    };

    console.log("updateNews", data);
    const result = await News.update(data, {
      where: { Id: id },
    });

    if (!result) {
      return res.status(401).send({
        status: "fail",
        message: "No News found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully update your News",
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
