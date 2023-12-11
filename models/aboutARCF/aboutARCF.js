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
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    heading: {
      type: DataTypes.STRING(30),
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

    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return aboutARCF;
};
