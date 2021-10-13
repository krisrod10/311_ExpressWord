// this is the starting point of our back end  Express server

// this is a express app
let express = require("express");
let env = require("dotenv").config();
let app = express();

// enable the application to be able to parse JSON bodies in post/put
app.use(express.json());

let exampleRoute = require("./router/word");
app.use(exampleRoute);

let userRoutes = require("./router/users")
app.use(userRoutes);

require("./db/db");


let port = process.env.PORT;

// i want to use router

app.listen(port, function () {
    console.log("Starting the app server on port", port);
})