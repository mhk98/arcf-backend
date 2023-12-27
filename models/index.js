const db = require("../db/db");
const { DataTypes } = require("sequelize");

// Synchronize the database.
// The `force: false` option means that it will not drop and true option it will drop
db.sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Connection re-synced");
  })
  .catch((err) => {
    console.log("Error on re-synced", err);
  });

// Define models and associate them with the Sequelize instance
// 'db.user' and 'db.report' now represent Sequelize models
db.user = require("../models/users/user")(db.sequelize, DataTypes);
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
db.projects = require("../models/projects/projects")(db.sequelize, DataTypes);

db.projectBanner = require("../models/projectBanner/projectBanner")(
  db.sequelize,
  DataTypes
);
db.projectDetails = require("../models/projectDetails/projectDetails")(
  db.sequelize,
  DataTypes
);
db.health = require("../models/health/health")(db.sequelize, DataTypes);

db.healthBanner = require("../models/healthBanner/healthBanner")(
  db.sequelize,
  DataTypes
);
db.healthDetails = require("../models/healthDetails/healthDetails")(
  db.sequelize,
  DataTypes
);

db.projects.hasMany(db.health, { foreignkey: "Id" });
db.health.belongsTo(db.projects, { foreignkey: "Id" });
db.projects.hasMany(db.healthBanner, { foreignkey: "Id" });
db.healthBanner.belongsTo(db.projects, { foreignkey: "Id" });
db.projects.hasMany(db.healthDetails, { foreignkey: "Id" });
db.healthDetails.belongsTo(db.projects, { foreignkey: "Id" });

// db.post.hasMany(db.reply, { foreignkey: "post_Id" });
// db.reply.belongsTo(db.post, { foreignkey: "post_Id" });

// db.comment.hasMany(db.reply, { foreignkey: "id" });
// db.reply.belongsTo(db.comment, { foreignkey: "id" });

module.exports = db;
