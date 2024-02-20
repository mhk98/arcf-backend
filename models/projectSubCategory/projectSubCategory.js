const validator = require("validator");
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes, Sequelize) => {
  const projectSubCategory = sequelize.define("projectSubCategory", {
    Id: {
      type: DataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    title: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    text: {
      type: DataTypes.TEXT, // Adjust the length as needed
      allowNull: true,
    },
    category: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },

    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  return projectSubCategory;
};
