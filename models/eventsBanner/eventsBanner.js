const validator = require("validator");
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes, Sequelize) => {
  const eventsBanner = sequelize.define("eventsBanner", {
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

    image1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image3: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return eventsBanner;
};
