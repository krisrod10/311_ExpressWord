let express = require("express"); // this is a express app

// i want to use router
let router = express.Router();

let midWare = require("../middleware/auth");
// the controller to link our functions
let controller = require("../controller/auth");

// route for a git thats connected to the controller that has this listed function
router.get("/everyone",controller.everyone);
 
// route for a get to check the jwt token
router.get("/authOnly", [midWare.loginCheck] , controller.checkJwt);

// route for a login that is producing a login
router.post("/login",  controller.login);


// a POST request to create a new user
router.post("/createUser", controller.createUser2);

module.exports=router;