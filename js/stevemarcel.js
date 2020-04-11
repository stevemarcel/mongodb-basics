const mongo = require ('mongodb');
const MongoClient = require ('mongodb').MongoClient;
const url = "mongodb://localhost:27017";
const dbName = "stevemarcel";

MongoClient.connect(url, {useUnifiedTopology: true},(err, db) =>{
  if (err) throw err;
  console.log ("Database Created by stevemarcel");
  db.close();
});
