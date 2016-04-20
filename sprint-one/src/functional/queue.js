var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var start = 0;
  var end = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[end] = value;
    end -= 1;
  };

  someInstance.dequeue = function() {
    var val = storage[start];
    start -= 1;
    return val;
  };

  someInstance.size = function() {
    return start - end > 0 ? start - end : 0;
  };

  return someInstance;
};
