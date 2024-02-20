const db = require("../../models");
const NewsCategoryDescription = db.newsCategoryDescription;

exports.createNewsCategoryDescription = async (req, res) => {
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
      newsId: id,
    };
    console.log("data", data);

    // console.log("createCategoryData", req.body);
    const result = await NewsCategoryDescription.create(data);

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

exports.getAllNewsCategoryDescription = async (req, res) => {
  try {
    const result = await NewsCategoryDescription.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully got all news category descriptions",
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

exports.singleNewsCategoryDescription = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await NewsCategoryDescription.findAll({
      where: { newsId: id },
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
    const { projectId } = req.params;

    const result = await NewsCategoryDescription.findAll({
      where: { newsId: id },
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

exports.deleteNewsCategoryDescription = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await NewsCategoryDescription.destroy({
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

exports.updateNewsCategoryDescription = async (req, res) => {
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
      title: title === "" ? undefined : title,
      text: text === "" ? undefined : text,
      category: category === "" ? undefined : category,
      image1: image1 && image1[0].path,
      image2: image2 && image2[0].path,
      image3: image3 && image3[0].path,
      image4: image4 && image4[0].path,
      newsId: id,
    };

    const result = await NewsCategoryDescription.update(data, {
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
