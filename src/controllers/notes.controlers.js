const ctrNotes = {};
const Note = require("../models/Notes"); //llamo ala schema que tengo en la carpeta de model

ctrNotes.renderNoteForm = (req, res) => {
  res.render("./notes/new-note");
};

ctrNotes.createNewNote = async (req, res) => {
  const { title, description } = req.body; //destructuro las propiedades qe vienen de body de la peticion post
  const newNote = new Note({ title, description }); //creo una instancia de la clase schema agregando los valores que me trae  la peticion
  await newNote.save(); //con esta  funcion la guardo en la base de datos
  //console.log(newNote);
  res.redirect("/notes");
};

ctrNotes.renderAllNotes = async (req, res) => {
  const notes = await Note.find().lean(); //aqui de manera async busco todas las nots que estan en la base de datos

  res.render("notes/all-notes", { notes });
};

ctrNotes.renderEditForm = (req, res) => {
  res.send("editando formulario");
};

ctrNotes.updateNotes = (req, res) => {
  res.send("update Notes");
};

ctrNotes.renderDeleteNote = async (req, res) => {
  
  await Note.findByIdAndDelete(req.params.id);//busco el ID con mongosee y automaticamente borra la nota de manera explicita
  res.redirect("/notes");
};


module.exports = ctrNotes;
