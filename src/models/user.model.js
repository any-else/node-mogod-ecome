const mongoose = require('mongoose'); // Erase if already required

const DOCUMENT_NAME = 'Users';
const COLLECTION_NAME = 'User';
// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema(
  {
    nameImage: {
      type: String,
    },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);

//Export the model
module.exports = mongoose.model(DOCUMENT_NAME, userSchema);
