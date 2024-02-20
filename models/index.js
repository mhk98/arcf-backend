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
db.contact = require("../models/contact/contact")(db.sequelize, DataTypes);
db.contactSlider = require("../models/contactSlider/contactSlider")(
  db.sequelize,
  DataTypes
);
db.aboutARCF = require("../models/aboutARCF/aboutARCF")(
  db.sequelize,
  DataTypes
);
db.aboutBanner = require("../models/aboutBanner/aboutBanner")(
  db.sequelize,
  DataTypes
);
db.chairman = require("../models/chairman/chairman")(db.sequelize, DataTypes);
db.currentChairman = require("../models/currentChairman/currentChairman")(
  db.sequelize,
  DataTypes
);
db.viceChairman = require("../models/viceChairman/viceChairman")(
  db.sequelize,
  DataTypes
);
db.assistantViceChairman =
  require("../models/assistantViceChairman/assistantViceChairman")(
    db.sequelize,
    DataTypes
  );
db.director = require("../models/director/director")(db.sequelize, DataTypes);
db.management = require("../models/management/management")(
  db.sequelize,
  DataTypes
);
db.volunteer = require("../models/volunteer/volunteer")(
  db.sequelize,
  DataTypes
);
db.projects = require("../models/projects/projects")(db.sequelize, DataTypes);

db.projectBanner = require("../models/projectBanner/projectBanner")(
  db.sequelize,
  DataTypes
);
db.projectDetails = require("../models/projectDetails/projectDetails")(
  db.sequelize,
  DataTypes
);
db.projectSubCategory =
  require("../models/projectSubCategory/projectSubCategory")(
    db.sequelize,
    DataTypes
  );

db.news = require("../models/news/news")(db.sequelize, DataTypes);
db.newsBanner = require("../models/newsBanner/newsBanner")(
  db.sequelize,
  DataTypes
);
db.newsDetails = require("../models/newsDetails/newsDetails")(
  db.sequelize,
  DataTypes
);
db.events = require("../models/events/events")(db.sequelize, DataTypes);
db.eventsBanner = require("../models/eventsBanner/eventsBanner")(
  db.sequelize,
  DataTypes
);
db.eventsDetails = require("../models/eventsDetails/eventsDetails")(
  db.sequelize,
  DataTypes
);
db.newsCategoryDescription =
  require("../models/newsCategoryDescription/newsCategoryDescription")(
    db.sequelize,
    DataTypes
  );
db.eventsCategoryDescription =
  require("../models/eventsCategoryDescription/eventsCategoryDescription")(
    db.sequelize,
    DataTypes
  );

// db.healthBanner = require("../models/healthBanner/healthBanner")(
//   db.sequelize,
//   DataTypes
// );
// db.healthDetails = require("../models/healthDetails/healthDetails")(
//   db.sequelize,
//   DataTypes
// );
db.projectSubCategoryDetails =
  require("../models/projectSubCategoryDetails/projectSubCategoryDetails")(
    db.sequelize,
    DataTypes
  );
db.projectSubCategoryDescription =
  require("../models/projectSubCategoryDescription/projectSubCategoryDescription")(
    db.sequelize,
    DataTypes
  );
db.projectSubCategoryDetailsHeader =
  require("./projectSubCategoryDetailsHeader/projectSubCategoryDetailsHeader")(
    db.sequelize,
    DataTypes
  );

db.projectSubCategoryHeader =
  require("./projectSubCategoryHeader/projectSubCategoryHeader")(
    db.sequelize,
    DataTypes
  );
db.galleryCategoryDescription =
  require("./galleryCategoryDescription/galleryCategoryDescription")(
    db.sequelize,
    DataTypes
  );
db.imageGallery = require("./imageGallery/imageGallery")(
  db.sequelize,
  DataTypes
);
db.videoGallery = require("./videoGallery/videoGallery")(
  db.sequelize,
  DataTypes
);
db.donationCategoryDescription =
  require("./donationCategoryDescription/donationCategoryDescription")(
    db.sequelize,
    DataTypes
  );
db.donation = require("./donation/donation")(db.sequelize, DataTypes);

db.projectSubCategory.hasMany(db.projectSubCategoryDetails, {
  foreignkey: "Id",
});
db.projectSubCategoryDetails.belongsTo(db.projectSubCategory, {
  foreignkey: "Id",
});

db.news.hasMany(db.newsCategoryDescription, { foreignkey: "Id" });
db.newsCategoryDescription.belongsTo(db.news, { foreignkey: "Id" });

db.events.hasMany(db.eventsCategoryDescription, { foreignkey: "Id" });
db.eventsCategoryDescription.belongsTo(db.events, { foreignkey: "Id" });

db.projects.hasMany(db.projectSubCategoryDetails, { foreignkey: "Id" });
db.projectSubCategoryDetails.belongsTo(db.projects, { foreignkey: "Id" });

db.projects.hasMany(db.projectSubCategory, { foreignkey: "Id" });
db.projectSubCategory.belongsTo(db.projects, { foreignkey: "Id" });

db.projects.hasMany(db.projectSubCategoryHeader, { foreignkey: "Id" });
db.projectSubCategoryHeader.belongsTo(db.projects, { foreignkey: "Id" });

db.projects.hasMany(db.projectSubCategoryDetailsHeader, { foreignkey: "Id" });
db.projectSubCategoryDetailsHeader.belongsTo(db.projects, { foreignkey: "Id" });

db.projects.hasMany(db.projectSubCategoryDescription, { foreignkey: "Id" });
db.projectSubCategoryDescription.belongsTo(db.projects, { foreignkey: "Id" });

db.projectSubCategory.hasMany(db.projectSubCategoryDescription, {
  foreignkey: "Id",
});
db.projectSubCategoryDescription.belongsTo(db.projectSubCategory, {
  foreignkey: "Id",
});

// db.projects.hasMany(db.healthBanner, { foreignkey: "Id" });
// db.healthBanner.belongsTo(db.projects, { foreignkey: "Id" });
// db.projects.hasMany(db.healthDetails, { foreignkey: "Id" });
// db.healthDetails.belongsTo(db.projects, { foreignkey: "Id" });

// db.post.hasMany(db.reply, { foreignkey: "post_Id" });
// db.reply.belongsTo(db.post, { foreignkey: "post_Id" });

// db.comment.hasMany(db.reply, { foreignkey: "id" });
// db.reply.belongsTo(db.comment, { foreignkey: "id" });

module.exports = db;
