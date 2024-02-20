const db = require("../../models");
const Donation = db.donation;

exports.createDonation = async (req, res) => {
  try {
    const { title, text, category, page } = req.body;

    const data = {
      title,
      page,
      text,
      category,
      image: req.file.path || "",
    };
    const result = await Donation.create(data);

    res.status(200).send({
      status: "Success",
      message: "Successfully created Donation",
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

exports.getAllDonation = async (req, res) => {
  try {
    const result = await Donation.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully got all Donation",
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
exports.singleDonation = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Donation.findOne({
      where: { Id: id },
    });

    if (!result) {
      return res.status(401).send({
        status: "fail",
        message: "No Donation found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully got your Donation",
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
exports.deleteDonation = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Donation.destroy({
      where: { Id: id },
    });

    if (!result) {
      return res.status(401).send({
        status: "fail",
        message: "No Donation found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully delete your Donation",
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

exports.updateDonation = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, text, page, category } = req.body;

    const data = {
      title: title === "" ? undefined : title,
      page: page === "" ? undefined : page,
      category: category === "" ? undefined : category,
    
      text: text === "" ? undefined : text,
      image: req.file === undefined ? undefined : req.file.path,
    };
    const result = await Donation.update(data, {
      where: { Id: id },
    });

    if (!result) {
      return res.status(401).send({
        status: "fail",
        message: "No Donation found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully update your Donation",
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
