const db = require("../../models");
const Director = db.director;

exports.createdirector = async (req, res) => {
  try {
    const { title, text } = req.body;
    const data = {
      title,
      text,
      image: req.file.path,
    };
    const director = await Director.create(data);

    res.status(200).send({
      status: "Success",
      message: "Successfully created director",
      data: director,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};

exports.getAlldirector = async (req, res) => {
  try {
    const director = await Director.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully got all director",
      data: director,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
exports.singledirector = async (req, res) => {
  try {
    const { id } = req.params;

    const director = await Director.findOne({
      where: { Id: id },
    });

    if (!director) {
      return res.status(401).send({
        status: "fail",
        message: "No director found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully got your director",
      data: director,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
exports.deletedirector = async (req, res) => {
  try {
    const { id } = req.params;

    const director = await Director.destroy({
      where: { Id: id },
    });

    if (!director) {
      return res.status(401).send({
        status: "fail",
        message: "No director found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully delete your director",
      data: director,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};

exports.updatedirector = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, text } = req.body;
    const data = {
      title,
      text,
      image: req.file.path,
    };
    const director = await Director.update(data, {
      where: { Id: id },
    });

    if (!director) {
      return res.status(401).send({
        status: "fail",
        message: "No director found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully update your director",
      data: director,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
