let express = require("express");
let jsonwebtoken = require("jsonwebtoken");
let app = express();
let db = require("../db/db");


let loginCheck = function(req,res){
    console.log("Inside login check");
    let sql = "SELECT username, password WHERE username = ?;";
    
    

  }
const { auth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'http://localhost:8000',
  clientID: '2HLGiVthIo6gDsPWhEUrRIjpoq6lxVxb',
  issuerBaseURL: 'https://dev-ubpa2sgx.us.auth0.com'
};


app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

module.exports= {loginCheck, config};