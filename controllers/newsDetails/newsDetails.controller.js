const db = require("../../models");
const NewsDetails = db.newsDetails;

exports.createNewsDetails = async (req, res) => {
  try {
    const { title, text } = req.body;
    const data = {
      title,
      text,
      image: req.file ? req.file.path || "" : "",
    };

    console.log("NewsDetails", data);
    const result = await NewsDetails.create(data);

    res.status(200).send({
      status: "Success",
      message: "Successfully created NewsDetails",
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

exports.getAllNewsDetails = async (req, res) => {
  try {
    const result = await NewsDetails.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully got all NewsDetails",
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
exports.singleNewsDetails = async (req, res) => {
  try {
    const { id } = req.params;
    s;

    const result = await NewsDetails.findOne({
      where: { Id: id },
    });

    if (!result) {
      return res.status(401).send({
        status: "fail",
        message: "No NewsDetails found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully got your NewsDetails",
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
exports.deleteNewsDetails = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await NewsDetails.destroy({
      where: { Id: id },
    });

    if (!result) {
      return res.status(401).send({
        status: "fail",
        message: "No NewsDetails found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully delete your NewsDetails",
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

exports.updateNewsDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, text } = req.body;
    const data = {
      title: title === "" ? undefined : title,
      text: text === "" ? undefined : text,
      image: req.file === undefined ? undefined : req.file.path,
    };
    const result = await NewsDetails.update(data, {
      where: { Id: id },
    });

    if (!result) {
      return res.status(401).send({
        status: "fail",
        message: "No NewsDetails found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully update your NewsDetails",
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
