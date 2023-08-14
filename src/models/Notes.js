const { Schema, model } = require("mongoose");

const NoteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    descriptions: {
      type: String,
      require: true,
    },
  },
  {
    timesTamps: true, // esto me permite agg fecha de creacion y actualizacion de maneta auntomatica
  }
);

module.exports = model("Note", NoteSchema)
