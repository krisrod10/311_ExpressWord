let express = require("express");

let router = express.Router();


// POST /record -body {word: "Test"}
// will add the word to our table in the database
router.post("/record", function(req, res) {
   console.log("Inside POST /record", req.body);
   res.json("Place Holder");
})


// GET /record
// will list all of the prevoiusly recorded words
router.get("/record", function(req, res) {
    console.log(" Inside the GET /record");
    res.json("Place Holder");
})

module.exports = router;