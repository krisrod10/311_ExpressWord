// this is connecting the connection.query from requiring it from that file

let db = require('../db/db');

let addWord = function (req, res) {

  /**
   * {
   * "word": "elephant"
   * }
   */

  let word = req.body.word;

  
  // get the word from the request 

  // send the word as an insert into the data base 
  // insert into words (word) values('elephant');

  let sql = `INSERT INTO words(word) values ('${word}');`;

  db.query(sql, function (err, rows) {
    if (err) {
      console.log("Failed to add to database", error);
      res.send(500);
    } else {
      res.sendStatus(204);
    }
  })

  // return a response of 204 if the query is successful

  // return a response of 500 if the query fails

}
let getWords = function (req, res) {
  console.log("GET getWords()");

  let sql = "SELECT word FROM words;";

  db.query(sql, function (error, rows) {
    if (error) {
      res.sendStatus(500);
    } else {
      let wordArray = rows.map(function (row) {
        return row.word
      })
      res.json(wordArray);
    }
  })
  // for your get 
  // issue the query: SELECT word FROM words
  // and process the results
  // if there is a error response back with a 500 on the response
  // if there is no error
  // 0. instantiate an empty array
  // 1. loop through the results of the query
  // 2. add every word that comes back to an array
  // 3. send the array back on the response
}

/***
 * [
  {
      "word": "Hello"
  }
]

["hello", "hello2"]
 */

module.exports={addWord, getWords}

