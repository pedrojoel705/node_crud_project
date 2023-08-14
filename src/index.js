require("dotenv").config(); //esto me permite cargar las variables de entorno mucho mas rapido

const app = require("./server");
require("./database");

const port = app.get("port");
app.listen(port, () => console.log(`Example app listening on port ${port}`));
