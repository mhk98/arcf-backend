const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./Images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  const fileTypes = /jpeg|jpg|png|gif/;
  const mimeType = fileTypes.test(file.mimetype);
  const extname = fileTypes.test(path.extname(file.originalname));

  if (mimeType && extname) {
    cb(null, true);
  } else {
    cb(new Error("Give proper files format to upload"));
  }
};

const limits = { fileSize: 5000000 }; // 5 MB

const singleUpload = multer({ storage, limits, fileFilter }).single("Image");
const multipleUpload = multer({ storage, limits, fileFilter }).array(
  "Image",
  10
);

module.exports.upload = (req, res, next) => {
  if (!req.files || req.files.length === 0) {
    // Handle the case where req.files is not defined or is an empty array
    return res.status(400).json({ error: "No files provided for upload" });
  }

  if (req.files.length === 1) {
    // Single image upload
    singleUpload(req, res, next);
  } else {
    // Multiple images upload
    multipleUpload(req, res, next);
  }
};
