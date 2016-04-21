var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var obj = Object.create(queueMethods);
  obj.start = 0;
  obj.end = 0;

  return obj;
};

var queueMethods = {
  size: function() {
    var x = this.end - this.start;
    return x > 0 ? x : 0;
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


