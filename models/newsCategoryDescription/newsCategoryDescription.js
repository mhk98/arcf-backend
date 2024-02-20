const validator = require("validator");
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes, Sequelize) => {
  const newsCategoryDescription = sequelize.define(
    "newsCategoryDescription",
    {
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
      image3: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      image4: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    }
  );

  return newsCategoryDescription;
};
