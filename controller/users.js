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
             console.log("USER ADDED")
             res.sendStatus(204);
         }
     })
 }


let listUsers = function (req, res) {
    console.log("GET /users: ", req); // using this to make sure the connection works
    //res.json("Inside place holder");   
    
    

    let sql = "SELECT id, fullname, username, email FROM users2;"
    
  

    db.query(sql,  function(error, rows){
        if(error){
            console.log("could not get users");
            res.sendStatus(500);
        } else{
            console.log("Here is all the users");
            res.send(rows);
        }
    })


}


let deleteUsers = function (req,res) {
    // using the place holder to make sure the connection works
    console.log("INSIDE delete");
    //res.json("Place Holder");
    
    
    let id = req.params.id;
    let sql = "DELETE FROM users2 where id = ? "
    let params = [];
    params.push(id);
    

   db.query(sql, params, function(error,rows){
       if(error){
           console.log("Could not delete user");
           res.sendStatus(400);
       } else{
           console.log("User DELETED");
           res.sendStatus(200);
       }
   })
}
      



    


let putUsers = function(req,res){
   console.log("INSIDE PUT");
  // res.json("PLACE HOLDER");
  let id = req.params.id;
  let username = req.body.username
  let sql = "UPDATE users2 SET username = ? where id = ? ;"
  let params = [];
  params.push(id)
  params.push(username);

  db.query(sql, params , function(error, rows){
      if(error){
          console.log("Could not update user");
          res.sendStatus(500);
      } else{
          console.log("USER UPDATED!");
          res.sendStatus(204);
      }
  })
  
   }
   
    

module.exports = { createUser, listUsers , deleteUsers, putUsers};