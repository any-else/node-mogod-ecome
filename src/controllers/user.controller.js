const { default: mongoose } = require('mongoose');
const User = require('../models/user.model');

const uploadImage = async (req, res, next) => {
  try {
    const url = req.protocol + '://' + req.get('host');
    const user = new User({
      _id: new mongoose.Types.ObjectId(),
      nameImage: url + '/public/' + req.file.filename,
    });

    const result = await user.save();
    res.status(201).json({
      message: 'oke',
      userCreate: {
        _id: result._id,
        nameImage: result.nameImage,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
};

module.exports = {
  uploadImage,
};
