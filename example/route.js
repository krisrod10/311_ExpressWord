let express = require("express");

let router = express.Router();

let controller = require("./controller");

// POST /record -body {word: "Test"}
// will add the word to our table in the database
router.post("/record", controller.addWord);


// GET /record
// will list all of the prevoiusly recorded words
router.get("/record", controller.getWords);



module.exports = router;
