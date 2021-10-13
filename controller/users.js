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
mysqlConnection.query("SELECT * FROM users2", (error, rows, fields) => { // using the mysql connection to talk to the database to retrieve all info from users2
if(!error){ // if there is not a error then we send back the rows to get the information from the users
        res.send(rows)
    } else{
        console.log(error) // if not we want to see what error is coming back inside of the console
    }
})

}


let deleteUsers = function (req,res) {
    // using the place holder to make sure the connection works
    console.log("INSIDE delete");
    res.json("Place Holder");
    const { id } = req.params; //requsting the data 

    const deleted = users.find(users => users.id === id); // find the user id that is equal to the id searched
    if(deleted){ // then use the filter method to get that id anf filter it out if that id is == null
   users = users.filter(users => users.id <= id);

    } else{
        res.status(204).json("User you are looking for does not exist") // always send me a status to let the user know what is going on
    }
}

let putUsers = function(req,res){
   console.log("INSIDE PUT");
   res.json("PLACE HOLDER");
   
   }
    

module.exports = { createUser, listUsers , deleteUsers, putUsers};