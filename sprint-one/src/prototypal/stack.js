var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);
  obj.length = 0;
  return obj;
};

var stackMethods = {

  size: function() {
    return this.length > 0 ? this.length : 0;
  },

  pop: function() {
    var val = this[this.length - 1];
    this.length -= 1;
    return val;
  },

  push: function(value) {
    this[this.length] = value;
    this.length += 1;
  }

};




//var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
//  var obj = Object.create(Stack.prototype);
//  obj.length = 0;
//  return obj;
//};

//Stack.prototype.size = function() {
//  return this.length > 0 ? this.length : 0;
//};

//Stack.prototype.pop = function() {
//  var val = this[this.length - 1];
//  this.length -= 1;
//  return val;
//};

//Stack.prototype.push = function(value) {
//  this[this.length] = value;
//  this.length += 1;
//};