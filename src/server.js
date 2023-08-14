const express = require("express");
const { engine } = require("express-handlebars");

const path = require("path");

const app = express();

// Initializations

// Settings
app.set("port", process.env.PORT || 4000);
app.set("views", path.join(__dirname, "views")); // Corrección: Agrega una coma después de __dirname
app.engine(
  ".hbs",
  engine({
    defaultLayout: "main", // defino por default que archivo quiero mostrar
    layoutsDir: path.join(app.get("views"), "layouts"), //le digo a node donde se encutra el archivo
    partialsDir: path.join(app.get("views"), "partials"), // igual le digo a node donde se encuentra el archivo
    extname: ".hbs", // defino que extencion debe abrir
  })
);

app.set("view engine", ".hbs"); // aca hago uso de engine y que extencion de archivo quiero que abra

// Middleware
app.use(express.urlencoded({ extended: false })); //le da formato automaticamente a los datos en formato JSON

// Global Variables

// Routes
app.use(require("./routes/index.routes")); //llamo al archivo router
app.use(require("./routes/notes.routes"));


// Static files
app.use(express.static(path.join(__dirname, "public"))); //me permite decirle a node donde esta carpeta public

module.exports = app;
