const db = require("../../models");
const EventsCategoryDescription = db.eventsCategoryDescription;
const Projects = db.projects;
const ProjectSubCategory = db.projectSubCategory;

exports.createEventsCategoryDescription = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, text, category } = req.body;

    const { image1, image2, image3, image4 } = req.files || {};
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
      image1: image1 && image1[0] ? image1[0].path || "" : "",
      image2: image2 && image2[0] ? image2[0].path || "" : "",
      image3: image3 && image3[0] ? image3[0].path || "" : "",
      image4: image4 && image4[0] ? image4[0].path || "" : "",
      eventId: id,
    };
    console.log("data", data);

    // console.log("createCategoryData", req.body);
    const result = await EventsCategoryDescription.create(data);

    console.log("result", result);

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

exports.getAllEventsCategoryDescription = async (req, res) => {
  try {
    const result = await EventsCategoryDescription.findAll();

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

exports.singleEventsCategoryDescription = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await EventsCategoryDescription.findAll({
      where: { eventId: id },
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

exports.getSingleProjectAllSubCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await EventsCategoryDescription.findAll({
      where: { eventId: id },
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

exports.deleteEventsCategoryDescription = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await EventsCategoryDescription.destroy({
      where: { Id: id },
    });

    // if (!result) {
    //   return res.status(401).send({
    //     status: "fail",
    //     message: "No health found",
    //   });
    // }
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

exports.updateEventsCategoryDescription = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, text, category } = req.body;

    const { image1, image2, image3, image4 } = req.files || {};
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
      image1: image1 && image1[0].path,
      image2: image2 && image2[0].path,
      image3: image3 && image3[0].path,
      image4: image4 && image3[0].path,
      eventId: id,
    };

    const result = await EventsCategoryDescription.update(data, {
      where: { eventId: id },
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
