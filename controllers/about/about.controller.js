const db = require("../../models");
const About = db.about;

exports.createabout = async (req, res) => {
  try {
    const { title, text } = req.body;
    console.log("createprojects", req.body);

    const { image1, image2, image3 } = req.files || {};

    const data = {
      title,
      text,
      image1: image1 && image1[0] ? image1[0].path || "" : "",
      image2: image2 && image2[0] ? image2[0].path || "" : "",
      image3: image3 && image3[0] ? image3[0].path || "" : "",
    };
    console.log("aboutdata", req.body);
    const about = await About.create(data);

    res.status(200).send({
      status: "Success",
      message: "Successfully created about",
      data: about,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};

exports.getAllabout = async (req, res) => {
  try {
    const about = await About.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully got all about",
      data: about,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
exports.singleabout = async (req, res) => {
  try {
    const { id } = req.params;

    const about = await About.findOne({
      where: { Id: id },
    });

    if (!about) {
      return res.status(401).send({
        status: "fail",
        message: "No about found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully got your about",
      data: about,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
exports.deleteabout = async (req, res) => {
  try {
    const { id } = req.params;

    const about = await About.destroy({
      where: { Id: id },
    });

    if (!about) {
      return res.status(401).send({
        status: "fail",
        message: "No about found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully delete your about",
      data: about,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};

exports.updateabout = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, text } = req.body;
    const { image1, image2, image3 } = req.files || {};

    const data = {
      title: title === "" ? undefined : title,
      text: text === "" ? undefined : text,
      image1: image1 && image1[0].path,
      image2: image2 && image2[0].path,
      image3: image3 && image3[0].path,
    };
    const about = await About.update(data, {
      where: { Id: id },
    });

    if (!about) {
      return res.status(401).send({
        status: "fail",
        message: "No about found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully update your about",
      data: about,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
