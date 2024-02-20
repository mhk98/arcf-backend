const db = require("../../models");
const Projects = db.projects;

exports.createprojects = async (req, res) => {
  try {
    const { title, text, category, page } = req.body;
    const { image1, image2, image3 } = req.files || {};

    const data = {
      title,
      text,
      category,
      page,
      image1: image1 && image1[0] ? image1[0].path || "" : "",
      image2: image2 && image2[0] ? image2[0].path || "" : "",
      image3: image3 && image3[0] ? image3[0].path || "" : "",
    };
    const projects = await Projects.create(data);

    res.status(200).send({
      status: "Success",
      message: "Successfully created projects",
      data: projects,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};

exports.getAllprojects = async (req, res) => {
  try {
    const projects = await Projects.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully got all projects",
      data: projects,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
exports.singleprojects = async (req, res) => {
  try {
    const { id } = req.params;

    const projects = await Projects.findOne({
      where: { Id: id },
    });

    if (!projects) {
      return res.status(401).send({
        status: "fail",
        message: "No projects found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully got your projects",
      data: projects,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
exports.deleteprojects = async (req, res) => {
  try {
    const { id } = req.params;

    const projects = await Projects.destroy({
      where: { Id: id },
    });

    if (!projects) {
      return res.status(401).send({
        status: "fail",
        message: "No projects found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully delete your projects",
      data: projects,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};

exports.updateprojects = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, text, page, category } = req.body;
    const { image1, image2, image3 } = req.files || {};

    const data = {
      title: title === "" ? undefined : title,
      text: text === "" ? undefined : text,
      page: page === "" ? undefined : page,
      category: category === "" ? undefined : category,
      image1: image1 && image1[0].path,
      image2: image2 && image2[0].path,
      image3: image3 && image3[0].path,
    };
    const projects = await Projects.update(data, {
      where: { Id: id },
    });

    if (!projects) {
      return res.status(401).send({
        status: "fail",
        message: "No projects found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully update your projects",
      data: projects,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
