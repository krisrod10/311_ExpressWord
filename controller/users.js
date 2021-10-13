let db = require("../db/db");

let createUser = function (req, res) {
    console.log("Inside createUser")
    

    /**
     * username
     * email
     * fullname
     * password
     */

    let username = req.body.username;
    let password = req.body.password;
    let fullname = req.body.fullname;
    let email = req.body.email;


    // GET USER BY ID
    //let sql2 = "SELECT * FROM users2 where id = ? ";
    //params = [req.params.id];


    let sql = "INSERT INTO users2 (username, email, fullname, password) values( ?, ?, ?, ?)";

    let params = [];
    params.push(username);
    params.push(email);
    params.push(fullname);
    params.push(password);
    

     db.query(sql, params, function (error, rows) {
         if(error) {
             console.log("INSERT user failed", error);
             res.sendStatus(500);
         } else {
             res.sendStatus(204);
         }
     })
 }


let listUsers = function (req, res) {
    console.log("GET /users: ", req); // using this to make sure the connection works
res.json("Inside place holder");   


}


let deleteUsers = function (req,res) {
    // using the place holder to make sure the connection works
    console.log("INSIDE delete");
    res.json("Place Holder");
    

    
}

let putUsers = function(req,res){
   console.log("INSIDE PUT");
   res.json("PLACE HOLDER");
  
   }
   
    

module.exports = { createUser, listUsers , deleteUsers, putUsers};