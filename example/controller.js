

let addWord = function(req,res){

    /**
     * {
     * "word": "elephant"
     * }
     */

    let word = req.body.word;

  // get the word from the request 
  
  // send the word as an insert into the data base 
 // insert into words (word) values('elephant');
 
 let sql = 'INSERT INTO words(word) values (${word});'

  // return a response of 204 if the query is successful

  // return a response of 500 if the query fails

}

