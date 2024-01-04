const db = require("../../models");
const ProjectSubCategory = db.projectSubCategory;
const Projects = db.projects;

exports.createProjectSubCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { detailsTitle, detailsContent, title, text, category } = req.body;
    const { image1, image2, image3 } = req.files;
    const projectData = await Projects.findOne({
      Where: {
        Id: id,
      },
    });
    const data = {
      detailsTitle,
      detailsContent,
      title,
      text,
      category,
      image: req.file.path,
      projectId: projectData.Id,
    };

    console.log("createCategoryData", req.body);
    const result = await ProjectSubCategory.create(data);

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

exports.getAllProjectSubCategory = async (req, res) => {
  try {
    const result = await ProjectSubCategory.findAll();

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
exports.singleProjectSubCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await ProjectSubCategory.findAll({
      where: { projectId: id },
    });

    if (!projectSubCategory) {
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
exports.deleteProjectSubCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await ProjectSubCategory.destroy({
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

exports.updateProjectSubCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const result = await ProjectSubCategory.update(data, {
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
