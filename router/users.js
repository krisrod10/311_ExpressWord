let controller = require("../controller/users");




// create user
// POST /users -body {"username", "fullName", 'Email, "password"}
router.post("/users", controller.createUser);

// list users
// GET / users (make sure to keep the passwords out of this)
router.get("/users", controller.listUsers);


// updating user
// PUT /users/:id -body {"fullname", 'email, 'password'}
// PUT /users/password/:id -body {"password"}



// delete users
// DELETE /users/:id



module.exports = router;