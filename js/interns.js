const assert = require('assert');

const insertDocuments = function(db, callback) {
  const collection = db.collection('documents');
  collection.insertMany([
    {name : 'Steve Marcel'}, {name : 'Charles Williams'}, {name : 'Ada Smiths'}
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the intern collection");
    callback(result);
  });
};

module.exports = insertDocuments;