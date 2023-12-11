const validator = require("validator");
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes, Sequelize) => {
  const aboutBanner = sequelize.define("aboutBanner", {
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

    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return aboutBanner;
};
