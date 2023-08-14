const { Router } = require("express");
const router = Router();
const{renderIndex, renderAbout}=require('../controllers/index.controler')

//ROUTE HOME
router.get("/", renderIndex);

//ROUTE ABOUT
router.get("/about",renderAbout);



module.exports = router;
