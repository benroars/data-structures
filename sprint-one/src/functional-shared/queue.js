function extend(obj1, obj2){
  for(var key in obj2){
    obj1[key] = obj2[key];
  }

  return obj1;
}

var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
 // var someInstance = {};
  var storage = {};
  storage.start = 0;
  storage.end = 0;

  storage = extend(storage, queueMethods);

  return storage;
};

var queueMethods = {
  
  size: function() {
    return this.end - this.start > 0 ? this.end - this.start : 0;
  },

  enqueue: function(value) {
    this[this.end] = value;
    this.end += 1;
  },

  dequeue: function() {
    var value = this[this.start];
    delete this[this.start];
    this.start += 1;

    return value;
  }
};


