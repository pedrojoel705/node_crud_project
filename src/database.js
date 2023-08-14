const mongoose = require("mongoose");

const { NOTES_APP_MONGO_HOST, NOTES_APP_MONGO_DATABASE } = process.env;

const MONGODB_URI = `mongodb://${NOTES_APP_MONGO_HOST}/${NOTES_APP_MONGO_DATABASE}`;

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then((db) => console.log("database is connected"))
  .catch((err) => console.log(err));
