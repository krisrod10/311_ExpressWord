let db = require("../db/db");



let createUser = function(req,res){
     console.log(" inside createuser");
     res.json("Place Holder CreateUser")
}


let listUsers = function(req,res){
    console.log("Inside listUser");
    res.json("Place Holder listUser")
}

module.export = {createUser, listUsers};