const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true, // Cambiado "require" a "required"
    },
  },
  {
    timestamps: true, // Cambiado "timesTamps" a "timestamps"
  }
);

module.exports = mongoose.model('Note', NoteSchema); // Cambiado "model" a "mongoose.model"
