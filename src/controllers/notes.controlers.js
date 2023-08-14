const ctrNotes = {};

ctrNotes.renderNoteForm = (req, res) => {
  res.send("notes add");
};

ctrNotes.createNewNote = (req, res) => {
  res.send("creando new Note");
};

ctrNotes.renderAllNotes = (req, res) => {
  res.send("obteniendo todas las notas ");
};

ctrNotes.renderEditForm = (req, res) => {
  res.send("editando formulario");
};

ctrNotes.updateNotes = (req, res) => {
  res.send("update Notes");
};

ctrNotes.renderDeleteNote = (req, res) => {
  res.send("Delete Note");
};
module.exports = ctrNotes;
