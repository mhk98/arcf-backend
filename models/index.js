const db = require("../db/db");
const { DataTypes } = require("sequelize");

// Synchronize the database.
// The `force: false` option means that it will not drop and true option it will drop
db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Connection re-synced");
  })
  .catch((err) => {
    console.log("Error on re-synced", err);
  });

// Define models and associate them with the Sequelize instance
// 'db.user' and 'db.report' now represent Sequelize models
db.user = require("../models/users/user")(db.sequelize, DataTypes);
db.projects = require("../models/projects/projects")(db.sequelize, DataTypes);
db.slider = require("../models/slider/slider")(db.sequelize, DataTypes);
db.faq = require("../models/faq/faq")(db.sequelize, DataTypes);
db.about = require("../models/about/about")(db.sequelize, DataTypes);
db.aboutARCF = require("../models/aboutARCF/aboutARCF")(
  db.sequelize,
  DataTypes
);
db.aboutBanner = require("../models/aboutBanner/aboutBanner")(
  db.sequelize,
  DataTypes
);
db.chairman = require("../models/chairman/chairman")(db.sequelize, DataTypes);
db.director = require("../models/director/director")(db.sequelize, DataTypes);
db.team = require("../models/team/team")(db.sequelize, DataTypes);

// db.post.hasMany(db.comment, { foreignkey: "post_Id" });
// db.comment.belongsTo(db.post, { foreignkey: "post_Id" });

// db.post.hasMany(db.reply, { foreignkey: "post_Id" });
// db.reply.belongsTo(db.post, { foreignkey: "post_Id" });

// db.comment.hasMany(db.reply, { foreignkey: "id" });
// db.reply.belongsTo(db.comment, { foreignkey: "id" });

module.exports = db;
