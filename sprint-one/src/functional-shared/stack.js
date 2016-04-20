var extend = function(obj, obj2) {
  for (var key in obj2) {
    obj[key] = obj2[key];
  }

  return obj;
};

var Stack = function() {
  var someInstance = {};
  // Use an object with numeric keys to store values
  someInstance.storage = {};
  someInstance.count = 0;

  someInstance = extend(someInstance, stackMethods);
  //console.log('someInstance, ', someInstance);

  return someInstance;
};

var stackMethods = {

  push: function(value) {
    this.storage[this.count] = value;
    this.count += 1;
  },

  pop: function() {
    var val = this.storage[this.count - 1];
    delete this.storage[this.count - 1 ];

    this.count -= 1;
    return val;
  },

  size: function() {
    return this.count > 0 ? this.count : 0;
  }

};

