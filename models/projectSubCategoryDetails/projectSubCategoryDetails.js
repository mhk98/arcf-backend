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

      detailsTitle: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },

      detailsContent: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      title: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },

      attributeName: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      category: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
     
    }
  );

  return projectSubCategoryDetails;
};
