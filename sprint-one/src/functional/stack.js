var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[count] = value;
    count += 1;
  };

  someInstance.pop = function() {
    var val = storage[count-1];
    delete storage[count-1];
    count -= 1;
    return val;
  };

  someInstance.size = function() {
    return count > 0 ? count : 0;
  };

  return someInstance;
};
