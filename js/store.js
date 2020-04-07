let mongo = require ('mongodb');
let MongoClient = require ('mongodb').MongoClient;
let url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, {useUnifiedTopology: true},(err, db) =>{
  if (err) throw err;

  var dbo = db.db("mydb");
  dbo.createCollection("interns",(err, res) =>{
    if (err) throw err;
    console.log ("Interns collection Created");
    db.close();
  });
});
