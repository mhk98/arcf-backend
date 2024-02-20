const db = require("../../models");
const ProjectBanner = db.projectBanner;

exports.createbanner = async (req, res) => {
  try {
    const { title } = req.body;
    const { image1, image2, image3 } = req.files || {};

    const data = {
      title,
      image1: image1 && image1[0] ? image1[0].path || "" : "",
      image2: image2 && image2[0] ? image2[0].path || "" : "",
      image3: image3 && image3[0] ? image3[0].path || "" : "",
    };
    console.log("banner", data);
    const banner = await ProjectBanner.create(data);

    res.status(200).send({
      status: "Success",
      message: "Successfully created banner",
      data: banner,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};

exports.getAllbanner = async (req, res) => {
  try {
    const banner = await ProjectBanner.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully got all banner",
      data: banner,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
exports.singlebanner = async (req, res) => {
  try {
    const { id } = req.params;
    s;

    const banner = await ProjectBanner.findOne({
      where: { Id: id },
    });

    if (!banner) {
      return res.status(401).send({
        status: "fail",
        message: "No banner found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully got your banner",
      data: banner,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
exports.deletebanner = async (req, res) => {
  try {
    const { id } = req.params;

    const banner = await ProjectBanner.destroy({
      where: { Id: id },
    });

    if (!banner) {
      return res.status(401).send({
        status: "fail",
        message: "No banner found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully delete your banner",
      data: banner,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};

exports.updatebanner = async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;
    const { image1, image2, image3 } = req.files || {};

    const data = {
      title: title === "" ? undefined : title,
      image1: image1 && image1[0].path,
      image2: image2 && image2[0].path,
      image3: image3 && image3[0].path,
    };

    const banner = await ProjectBanner.update(data, {
      where: { Id: id },
    });

    if (!banner) {
      return res.status(401).send({
        status: "fail",
        message: "No banner found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully update your banner",
      data: banner,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
