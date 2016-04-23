var Tree = function(value) {
  var newTree = {};
  newTree = Object.create(treeMethods); //need to change to extend
  newTree.value = value;
  newTree.children = [];  // fix me

  newTree.parent = null;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var t = new Tree(value);
  t.parent = this;
  this.children.push(t);
};

treeMethods.contains = function(target) {
  var results = [];
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

treeMethods.removeFromParent = function() {
  var temp = this.parent.children;
  var index = this.parent.children.indexOf(this);
  this.parent.children[index] = undefined;
  this.parent = null;
  //console.log(temp);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
