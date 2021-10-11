

let express = require("express");
const { appendFile } = require("fs");

let router = express.Router();

let controller = require("../controller/users")



// creare users
// POST /users -body{"username", "fullname", "email", "password"}
router.post("/users", controller.createUser);





// updating users
// PUT /users/:id -body{"fullName", "email"}
// PUT /users/password/:id -body{"password"}
router.put("/users", controller.putUsers);


// list users
// GET /users (make sure to keep the password out of this)
router.get("/users", controller.listUsers);

// delete users
// DELETE /USERS/:id
router.delete("/users", controller.deleteUsers);




module.exports = router;