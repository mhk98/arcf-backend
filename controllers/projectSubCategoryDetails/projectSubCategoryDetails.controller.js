const db = require("../../models");
const ProjectSubCategoryDetails = db.projectSubCategoryDetails;
const ProjectSubCategory = db.projectSubCategory;
const Projects = db.projects;

exports.createProjectSubCategoryDetails = async (req, res) => {
  try {
    const { projectId, subCategoryId } = req.params;
    const { image1, image2 } = req.files || {};
    const { title, attributeName, text, category } = req.body;

    const projectData = await Projects.findOne({ where: { Id: projectId } });
    const projectSubCategory = await ProjectSubCategory.findOne({
      where: { Id: subCategoryId },
    });
    const data = {
      projectId: projectData.Id,
      projectSubCategoryId: projectSubCategory.Id,
      title,
      category,
      attributeName,
      image1: image1 && image1[0] ? image1[0].path || "" : "",
      image2: image2 && image2[0] ? image2[0].path || "" : "",
    };

    const result = await ProjectSubCategoryDetails.create(data);

    res.status(200).send({
      status: "Success",
      message: "Successfully created healthCategoryDetails",
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

exports.getAllProjectSubCategoryDetails = async (req, res) => {
  try {
    const result = await ProjectSubCategoryDetails.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully got all healthCategoryDetails",
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
exports.singleProjectSubCategoryDetails = async (req, res) => {
  try {
    const { projectId, subCategoryId } = req.params;

    console.log("params", projectId, subCategoryId);

    const result = await ProjectSubCategoryDetails.findOne({
      where: { projectId: projectId, projectSubCategoryId: subCategoryId },
    });

    if (!result) {
      return res.status(401).send({
        status: "fail",
        message: "No healthCategoryDetails found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully got your healthCategoryDetails",
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
exports.deleteProjectSubCategoryDetails = async (req, res) => {
  try {
    const { projectId, subCategoryId } = req.params;

    const healthCategoryDetails = await ProjectSubCategoryDetails.destroy({
      where: { projectId: projectId, subCategoryId: subCategoryId },
    });

    res.status(200).send({
      status: "Success",
      message: "Successfully delete your healthCategoryDetails",
      data: healthCategoryDetails,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};

exports.updateProjectSubCategoryDetails = async (req, res) => {
  try {
    const { projectId, subCategoryId } = req.params;
    const { image1, image2 } = req.files || {};
    const { title, attributeName, category } = req.body;

    const projectData = await Projects.findOne({ where: { Id: projectId } });
    const projectSubCategory = await ProjectSubCategory.findOne({
      where: { Id: subCategoryId },
    });
    const data = {
      projectId: projectData.Id,
      projectSubCategoryId: projectSubCategory.Id,
      title: title === "" ? undefined : title,
      category: category === "" ? undefined : category,
      attributeName: attributeName === "" ? undefined : attributeName,

      image1: image1 && image1[0].path,
      image2: image2 && image2[0].path,
    };
    const result = await ProjectSubCategoryDetails.update(data, {
      where: { projectId: projectId, subCategoryId: subCategoryId },
    });

    res.status(200).send({
      status: "Success",
      message: "Successfully update your healthCategoryDetails",
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
