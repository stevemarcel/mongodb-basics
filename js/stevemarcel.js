const MongoClient = require ('mongodb').MongoClient;
const assert = require('assert');
const insertInterns = require('./interns');
const findInterns = require('./findInterns');
const url = 'mongodb://localhost:27017';
const dbName = 'stevemarcel';

const client = new MongoClient(url, {useUnifiedTopology: true, useNewUrlParser: true});
  
client.connect(err =>{
  assert.equal(null, err);
  console.log ("Database Created by stevemarcel");
  const db = client.db(dbName);
  
  insertInterns(db, function() {
    findInterns(db, function() {
        client.close();
      });
  });
});
