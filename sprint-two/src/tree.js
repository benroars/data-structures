var Tree = function(value) {
  var newTree = {};
  newTree = Object.create(treeMethods); //need to change to extend
  newTree.value = value;
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var t = new Tree(value);
  this.children.push(t);
};

treeMethods.contains = function(target) {
  results = [];
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].value === target) {
      results = results.concat(true);
    }
    if (this.children[i].children.length !== 0) {
      results = results.concat(this.children[i].contains(target));
    }
  }

  return results.includes(true);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
