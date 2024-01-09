const db = require("../../models");
const ProjectSubCategoryDescription = db.projectSubCategoryDescription;
const Projects = db.projects;
const ProjectSubCategory = db.projectSubCategory;

exports.createProjectSubCategoryDescription = async (req, res) => {
  try {
    const { projectId, subcategoryId } = req.params;
    const { title, text, category } = req.body;

    const { image1, image2 } = req.files;
    // const projectData = await Projects.findOne({
    //   Where: {
    //     Id: projectId,
    //   },
    // });

    // const projectSubCategoryData = await ProjectSubCategory.findOne({
    //   Where: {
    //     Id: subcategoryId,
    //   },
    // });
    const data = {
      title,
      text,
      category,
      image1: image1[0].path,
      image2: image2[0].path,
      projectId: projectId,
      projectSubCategoryId: subcategoryId,
    };
    console.log("data", data);

    // console.log("createCategoryData", req.body);
    const result = await ProjectSubCategoryDescription.create(data);

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

exports.getAllProjectSubCategoryDescription = async (req, res) => {
  try {
    const result = await ProjectSubCategoryDescription.findAll();

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
exports.singleProjectSubCategoryDescription = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await ProjectSubCategoryDescription.findAll({
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
exports.deleteProjectSubCategoryDescription = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await ProjectSubCategoryDescription.destroy({
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

exports.updateProjectSubCategoryDescription = async (req, res) => {
  try {
    const { projectId, subcategoryId } = req.params;
    const { title, text, category } = req.body;
    const result = await ProjectSubCategoryDescription.update(data, {
      where: { Id: projectId },
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
