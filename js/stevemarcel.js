let mongo = require ('mongodb');
let MongoClient = require ('mongodb').MongoClient;
let url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, {useUnifiedTopology: true},(err, db) =>{
  if (err) throw err;
  console.log ("Database Created by stevemarcel");
  db.close();
});
