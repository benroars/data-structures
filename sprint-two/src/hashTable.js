var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var contents = this._storage.get(index);

  if (!contents) {
    this._storage.set(index, []);
  }
  var keyval = [k, v];

  var temp = this._storage.get(index);
  
  if (this._storage.get(index)[0] !== undefined) {  
    for (var i = 0; i < this._storage.get(index).length; i++) {
      if (this._storage.get(index)[i][0] === k) {
        console.log('suh');
      }
    }
  }

  temp.push(keyval);
  this._storage.set(index, temp);

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var contents = this._storage.get(index);
  var results = '';

  for (var i = 0; i < contents.length; i++) {
    if (contents[i][0] === k) {
      results = contents[i][1];
    }
  }

  return results;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  var temp = this._storage.get(index);
 // console.log(temp[0]);

  for (var i = 0; i < temp.length; i++) {
    if (temp[i][0] === k) {
      temp[i][1] = undefined;
    }
  }
//  console.log(temp[0]);


  this._storage.set(index, temp);

};



/*
 * Complexity: What is the time complexity of the above functions?
 */


