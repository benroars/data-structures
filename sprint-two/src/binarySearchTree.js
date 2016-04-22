var extend = function(obj, obj2) {
  for (var key in obj2) {
    obj[key] = obj2[key];
  }
  return obj;
};


var BinarySearchTree = function(value) {
  //var bTree = Object.create(methods);

  var bTree = {};

  bTree.value = value;
  bTree.left = null;
  bTree.right = null;

  bTree = extend(bTree, methods);
  
  return bTree;
};

var methods = {};

methods.insert = function(value) {
  var node = BinarySearchTree(value);
  var current = this;

  while (true) {
    if (value < current.value && current.left === null) {
      current.left = node;
      break;
    } else if (value < current.value) {
      current = current.left;

    } else if (value > current.value && current.right === null) {
      current.right = node;
      break;
    } else if (value > current.value) {
      current = current.right;
    } else {
      break;
    }  
  }
};

methods.contains = function(value) {
  var current = this;
  while (true) {
    if (current.value === value) {
      return true;
    } else if (value < current.value && current.left !== null) {
      current = current.left;
    } else if (value > current.value && current.right !== null) {
      current = current.right;
    } else {
      break;
    }
  }

  return false;
};

methods.depthFirstLog = function(callback) {
  var current = this;
  var results = [this.value];

  if()
  

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
