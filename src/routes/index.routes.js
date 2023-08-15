const { Router } = require("express");
const router = Router();
const {
  renderIndex,
  renderAbout,
  renderLogin,
  renderRegistrer,
} = require("../controllers/index.controler");

//ROUTE HOME
router.get("/", renderIndex);

//ROUTE ABOUT
router.get("/about", renderAbout);

//ROUTER LOGIN
router.get("/login", renderLogin);

//ROUTE REGISTRER
router.get("/registrer", renderRegistrer);

module.exports = router;
