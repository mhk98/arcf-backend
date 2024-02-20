const db = require("../../models");
const ProjectSubCategoryDetailsHeader = db.ProjectSubCategoryDetailsHeader;
const Projects = db.projects;

exports.createProjectSubCategoryDetailsHeader = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, text, category } = req.body;
    const { image1, image2, image3, image4 } = req.files;
    const projectData = await Projects.findOne({
      Where: {
        Id: id,
      },
    });
    const data = {
      title,
      text,
      category,
      image1: image1 && image1[0] ? image1[0].path || "" : "",
      image2: image2 && image2[0] ? image2[0].path || "" : "",
      image3: image3 && image3[0] ? image3[0].path || "" : "",
      image4: image4 && image4[0] ? image4[0].path || "" : "",
      projectId: projectData.Id,
    };

    console.log("createCategoryData", req.body);
    const result = await ProjectSubCategoryDetailsHeader.create(data);

    res.status(200).send({
      status: "Success",
      message: "Successfully created ProjectSubCategoryDetailsHeader",
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

exports.getAllProjectSubCategoryDetailsHeader = async (req, res) => {
  try {
    const result = await ProjectSubCategoryDetailsHeader.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully got all ProjectSubCategoryDetailsHeader",
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
exports.singleProjectSubCategoryDetailsHeader = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await ProjectSubCategoryDetailsHeader.findAll({
      where: { projectId: id },
    });

    if (!result) {
      return res.status(401).send({
        status: "fail",
        message: "No ProjectSubCategoryDetailsHeader found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully got your ProjectSubCategoryDetailsHeader",
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
exports.deleteProjectSubCategoryDetailsHeader = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await ProjectSubCategoryDetailsHeader.destroy({
      where: { Id: id },
    });

    if (!result) {
      return res.status(401).send({
        status: "fail",
        message: "No ProjectSubCategoryDetailsHeader found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully delete your ProjectSubCategoryDetailsHeader",
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

exports.updateProjectSubCategoryDetailsHeader = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, text, category } = req.body;
    const { image1, image2, image3, image4 } = req.files;
    const projectData = await Projects.findOne({
      Where: {
        Id: id,
      },
    });
    const data = {
      title: title === "" ? undefined : title,
      text: text === "" ? undefined : text,
      category: category === "" ? undefined : category,
      image1: image1 && image1[0].path,
      image2: image2 && image2[0].path,
      image3: image3 && image3[0].path,
      image4: image4 && image4[0].path,
      projectId: projectData.Id,
    };
    const result = await ProjectSubCategoryDetailsHeader.update(data, {
      where: { Id: id },
    });

    if (!result) {
      return res.status(401).send({
        status: "fail",
        message: "No ProjectSubCategoryDetailsHeader found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully update your ProjectSubCategoryDetailsHeader",
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
