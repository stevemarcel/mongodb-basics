const assert = require('assert');

const insertInterns = function(db, callback) {
  const collection = db.collection('Interns');
  collection.insertMany([
    {name : 'Steve Marcel'}, {name : 'Charles Williams'}, {name : 'Ada Smiths'}
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 Interns into the intern collection");
    callback(result);
  });
};

module.exports = insertInterns;