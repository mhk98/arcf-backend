const validator = require("validator");
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes, Sequelize) => {
  const VideoGallery = sequelize.define("VideoGallery", {
    Id: {
      type: DataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    video: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return VideoGallery;
};
