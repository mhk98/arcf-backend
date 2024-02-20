const db = require("../../models");
const HealthBanner = db.healthBanner;

exports.createhealthBanner = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, category } = req.body;

    // const projectData = await Projects.findOne({
    //   Where: {
    //     projectId: id,
    //   },
    // });

    const data = {
      title,
      category,
      image: req.file ? req.file.path || "" : "",
    };

    const healthBanner = await HealthBanner.create(data);

    res.status(200).send({
      status: "Success",
      message: "Successfully created healthBanner",
      data: healthBanner,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};

exports.getAllhealthBanner = async (req, res) => {
  try {
    const healthBanner = await HealthBanner.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully got all healthBanner",
      data: healthBanner,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
exports.singlehealthBanner = async (req, res) => {
  try {
    const { id } = req.params;

    const healthBanner = await HealthBanner.findOne({
      where: { category: id },
    });

    console.log(id);
    if (!healthBanner) {
      return res.status(401).send({
        status: "fail",
        message: "No healthBanner found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully got your healthBanner",
      data: healthBanner,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
exports.deletehealthBanner = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("category", id);
    const healthBanner = await HealthBanner.destroy({
      where: { category: id },
    });

    if (!healthBanner) {
      return res.status(401).send({
        status: "fail",
        message: "No healthBanner found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully delete your healthBanner",
      data: healthBanner,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};

exports.updatehealthBanner = async (req, res) => {
  try {
    const { id } = req.params;

    console.log("HealthBanner", id);
    const { title } = req.body;
    const data = {
      title: title === "" ? undefined : title,
      image: req.file === undefined ? undefined : req.file.path,
    };
    const healthBanner = await HealthBanner.update(data, {
      where: { category: id },
    });

    if (!healthBanner) {
      return res.status(401).send({
        status: "fail",
        message: "No healthBanner found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully update your healthBanner",
      data: healthBanner,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
