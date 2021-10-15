let express = require("express");

let db = require("../db/db");


let loginCheck = function(req,res){
    console.log("Inside login check");
    let sql = "SELECT username, password WHERE username = ?;";
    

    
    
    let username = req.body.username;
    let password = req.body.password;

    let params = [];
    params.push(username);
    params.push(password);

    db.query(sql, params, function(error, rows){
        if(error){
            console.log("Wrong username or password");
            res.sendStatus(204);
        } else{
            console.log("That username and password worked");
            res.sendStatus(204);
        }
    })

}

module.exports= {loginCheck};