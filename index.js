// this is a express app
let express = require("express");
let env = require("dotenv").config();
let app = express();
const { auth, requiresAuth } = require('express-openid-connect');
let jsonwebtoken = require("jsonwebtoken");
// to get the password hash, since our databses does not store the password correctly
let bcrypt = require("bcrypt");
let jwtSecret = process.env.jwtSecret;
// enable the application to be able to parse JSON bodies in post/put

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(
    auth({
        issuerBaseURL:process.env.ISSUER_BASE_URL,
        baseURL:process.env.BASE_URL,
        clientID:process.env.CLIENT_ID,
        secret:process.env.SECRET
    })
)

app.get('/', function(req,res){
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
})

app.get('/profile', requiresAuth(), function(req,res){
    res.send(JSON.stringify(req.oidc.user));
})
let exampleRoute = require("./router/word");
app.use(exampleRoute);

let userRoutes = require("./router/users")
app.use(userRoutes);

let authRoute = require("./router/auth");
app.use(authRoute);

require("./db/db");


let port = process.env.PORT;

// i want to use router

app.listen(port, function () {
    console.log("Starting the app server on port", port);
})