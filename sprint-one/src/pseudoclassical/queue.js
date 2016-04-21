var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.start = 0;
  this.end = 0;

};


Queue.prototype.size = function() {
  var x = this.end - this.start;
  return x > 0 ? x : 0;
};

Queue.prototype.dequeue = function() {
  var val = this.storage[this.start];
  delete this.storage[this.start];
  this.start += 1;
  return val;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.end] = value;
  this.end += 1;
};