// unlinkImage.js
const fs = require("fs");

const unlinkImage = (imagePath) => {
  fs.unlink(imagePath, (err) => {
    if (err) {
      console.error("Error unlinking image:", err);
    } else {
      console.log("Image unlinked successfully:", imagePath);
    }
  });
};

module.exports = unlinkImage;
