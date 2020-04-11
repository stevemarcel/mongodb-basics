const MongoClient = require ('mongodb').MongoClient;
const assert = require('assert')
const url = 'mongodb://localhost:27017';
const dbName = 'stevemarcel';

const client = new MongoClient(url, {useUnifiedTopology: true, useNewUrlParser: true});
  
client.connect(err =>{
  assert.equal(null, err);
  console.log ("Database Created by stevemarcel");
  const db = client.db(dbName);
  
  client.close();
});
