let express = require("express");

let router = express.Router();

let controller = require("../controller/word");

let auth = require("../middleware/auth");

// POST /record -body {word: "Test"}
// will add the word to our table in the database
router.post("/record", auth.loginCheck, controller.addWord);

 //GET /record
// will list all of the prevoiusly recorded words
router.get("/record", controller.getWords);



module.exports = router;
