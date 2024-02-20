const db = require("../../models");
const DonationCategoryDescription = db.donationCategoryDescription;

exports.createDonationCategoryDescription = async (req, res) => {
  try {
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
    };
    console.log("data", data);

    // console.log("createCategoryData", req.body);
    const result = await DonationCategoryDescription.create(data);

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

exports.getAllDonationCategoryDescription = async (req, res) => {
  try {
    const result = await DonationCategoryDescription.findAll();

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

exports.singleDonationCategoryDescription = async (req, res) => {
  try {
    const { projectId, subCategoryId } = req.params;

    const result = await DonationCategoryDescription.findAll({
      where: { projectId: projectId, projectSubCategoryId: subCategoryId },
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

    const result = await DonationCategoryDescription.findAll({
      where: { projectId: projectId },
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

exports.deleteDonationCategoryDescription = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await DonationCategoryDescription.destroy({
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

exports.updateDonationCategoryDescription = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, text } = req.body;

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
      image1: image1 && image1[0].path,
      image2: image2 && image2[0].path,
      image3: image3 && image3[0].path,
      image4: image4 && image3[0].path,
    };

    const result = await DonationCategoryDescription.update(data, {
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
