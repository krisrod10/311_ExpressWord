let express = require("express");

let router = express.Router();

let controller = require("../controller/auth");

router.get("/everyone",controller.everyone);
 

router.get("/authOnly", controller.checkJwt);

router.post("/login", controller.login)

router.post("/createUser", controller.createUser2);