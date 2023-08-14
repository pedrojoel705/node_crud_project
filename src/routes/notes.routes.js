const { Router } = require("express");
const router = Router();

const {
  renderNoteForm,
  createNewNote,
  renderAllNotes,
  renderEditForm,
  updateNotes,
  renderDeleteNote
} = require("../controllers/notes.controlers");


//new notes
router.get("/notes/add", renderNoteForm);

router.post("/notes/add", createNewNote);

//get all notes

router.get("/notes", renderAllNotes);

//Edit notes
router.get("/notes/edit/:id", renderEditForm);
router.put("/notes/edit/:id", updateNotes);

//delete Notes

router.delete('/notes/delete/:id', renderDeleteNote)

module.exports = router;
