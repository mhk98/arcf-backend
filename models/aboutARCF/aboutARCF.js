const validator = require("validator");
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes, Sequelize) => {
  const aboutARCF = sequelize.define("aboutARCF", {
    Id: {
      type: DataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    heading: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    point1: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    point2: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    point3: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    image1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return aboutARCF;
};
