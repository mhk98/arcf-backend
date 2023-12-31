const validator = require("validator");
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes, Sequelize) => {
  const health = sequelize.define("health", {
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
      type: DataTypes.TEXT, // Adjust the length as needed
      allowNull: true,
    },
    category: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },

    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  return health;
};
