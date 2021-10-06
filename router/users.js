

let express = require("express");

let router = express.Router();




// create user
// POST /users -body {"username", "fullName", 'Email, "password"}



// updating user
// PUT /users/:id -body {"fullname", 'email, 'password'}
// PUT /users/password/:id -body {"password"}



// list users
// GET / users (make sure to keep the passwords out of this)


// delete users
// DELETE /users/:id








module.exports = router;