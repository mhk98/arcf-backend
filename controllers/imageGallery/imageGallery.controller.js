const db = require("../../models");
const ImageGallery = db.imageGallery;

exports.createImageGallery = async (req, res) => {
  try {
    const { page } = req.body;
    const data = {
      page,
      image: req.file ? req.file.path || "" : "",
    };
    const result = await ImageGallery.create(data);

    res.status(200).send({
      status: "Success",
      message: "Successfully created ImageGallery",
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

exports.getAllImageGallery = async (req, res) => {
  try {
    const result = await ImageGallery.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully got all ImageGallery",
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
exports.singleImageGallery = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await ImageGallery.findOne({
      where: { Id: id },
    });

    if (!result) {
      return res.status(401).send({
        status: "fail",
        message: "No ImageGallery found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully got your ImageGallery",
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
exports.deleteImageGallery = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await ImageGallery.destroy({
      where: { Id: id },
    });

    if (!result) {
      return res.status(401).send({
        status: "fail",
        message: "No ImageGallery found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully delete your ImageGallery",
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

exports.updateImageGallery = async (req, res) => {
  try {
    const { id } = req.params;
    const { page } = req.body;
    const data = {
      page: page === "" ? undefined : page,
      image: req.file === undefined ? undefined : req.file.path,
    };
    const result = await ImageGallery.update(data, {
      where: { Id: id },
    });

    if (!result) {
      return res.status(401).send({
        status: "fail",
        message: "No ImageGallery found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully update your ImageGallery",
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
