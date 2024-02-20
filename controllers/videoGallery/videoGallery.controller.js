const db = require("../../models");
const VideoGallery = db.videoGallery;

exports.createVideoGallery = async (req, res) => {
  const { video } = req.body;
  const data = {
    video: video,
  };
  try {
    const result = await VideoGallery.create(data);

    res.status(200).send({
      status: "Success",
      message: "Successfully created VideoGallery",
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

exports.getAllVideoGallery = async (req, res) => {
  try {
    const result = await VideoGallery.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully got all VideoGallery",
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
exports.singleVideoGallery = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await VideoGallery.findOne({
      where: { Id: id },
    });

    if (!result) {
      return res.status(401).send({
        status: "fail",
        message: "No VideoGallery found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully got your VideoGallery",
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
exports.deleteVideoGallery = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await VideoGallery.destroy({
      where: { Id: id },
    });

    if (!result) {
      return res.status(401).send({
        status: "fail",
        message: "No VideoGallery found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully delete your VideoGallery",
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

exports.updateVideoGallery = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await VideoGallery.update(req.body, {
      where: { Id: id },
    });

    if (!result) {
      return res.status(401).send({
        status: "fail",
        message: "No VideoGallery found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully update your VideoGallery",
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
