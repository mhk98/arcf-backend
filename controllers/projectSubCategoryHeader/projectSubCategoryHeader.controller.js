const db = require("../../models");
const ProjectSubCategoryHeader = db.projectSubCategoryHeader;
const Projects = db.projects;

exports.createProjectSubCategoryHeader = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, text, category } = req.body;

    const { image1, image2 } = req.files;
    const projectData = await Projects.findOne({
      Where: {
        Id: id,
      },
    });
    const data = {
      title,
      text,
      category,
      image1: image1[0].path,
      image2: image2[0].path,
      projectId: projectData.Id,
    };
    console.log("data", data);

    // console.log("createCategoryData", req.body);
    const result = await ProjectSubCategoryHeader.create(data);

    res.status(200).send({
      status: "Success",
      message: "Successfully created ProjectSubCategory",
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

exports.getAllProjectSubCategoryHeader = async (req, res) => {
  try {
    const result = await ProjectSubCategoryHeader.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully got all health",
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
exports.singleProjectSubCategoryHeader = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await ProjectSubCategoryHeader.findAll({
      where: { projectId: id },
    });

    if (!result) {
      return res.status(401).send({
        status: "fail",
        message: "No health found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully got your health",
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
exports.deleteProjectSubCategoryHeader = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await ProjectSubCategoryHeader.destroy({
      where: { Id: id },
    });

    if (!result) {
      return res.status(401).send({
        status: "fail",
        message: "No health found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully delete your health",
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

exports.updateProjectSubCategoryHeader = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const result = await ProjectSubCategoryHeader.update(data, {
      where: { Id: id },
    });

    if (!result) {
      return res.status(401).send({
        status: "fail",
        message: "No health found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully update your health",
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
