const assert = require('assert');
 
 const findDocuments = function(db, callback) {
  const collection = db.collection('Interns');
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  });
  };
 
 module.exports = findDocuments;
