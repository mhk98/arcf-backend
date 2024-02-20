const validator = require("validator");
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes, Sequelize) => {
  const projectSubCategoryDetails = sequelize.define(
    "projectSubCategoryDetails",
    {
      Id: {
        type: DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      title: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },

      text: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      category: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      image1: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      image2: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    }
  );

  return projectSubCategoryDetails;
};
