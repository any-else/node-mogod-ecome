const baseUrl = '/api/v1/users';
const userController = require('../controllers/user.controller');

const multer = require('multer');
const uuidv4 = require('uuid/v4');

//tao dir
const DIR = './public/';
//tao storage dir
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, DIR);
  },
  filename: (req, file, callback) => {
    const fileName = file.originalname.toLowerCase().split(' ').join('-');
    callback(null, uuidv4() + '-' + fileName);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, callback) => {
    if (
      file.mimetype == 'image/png' ||
      file.mimetype == 'image/jpg' ||
      file.mimetype == 'image/jpeg'
    ) {
      callback(null, true);
    } else {
      callback(null, false);
      return callback(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  },
});

// handle
const user = (app) => {
  app.post(`${baseUrl}/upload`, upload.single('nameImage'), userController.uploadImage);
};

module.exports = user;
