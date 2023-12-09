const validator = require("validator");
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes, Sequelize) => {
  const faq = sequelize.define("faq", {
    Id: {
      type: DataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    question: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },

    answer: {
      type: DataTypes.STRING(255), // Adjust the length as needed
      allowNull: false,
      unique: true,
    },

   
  });

  return faq;
};
