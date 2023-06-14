const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    stID: { type: Number, required: true },
    image: { type: String },
  },
  {
    timestamps: true,
    collection: "students",
  }
);

module.exports = mongoose.model('Student', studentSchema);