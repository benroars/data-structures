
// ------------------------
// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(nodeValue) {
  this.nodes[nodeValue] = [];
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(nodeValue) {
  if (this.nodes.hasOwnProperty(nodeValue)) {
    return true;
  } else {
    return false;
  }
};   

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(index) {
  //need to remove the links
  for (var key in this.nodes) {
    if (this.nodes[key].includes(index)) {
      var i = this.nodes[key].indexOf(index);
      this.nodes[key].splice(i, 1);
    }
  }
  delete this.nodes[index];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(node1, node2) {
  //console.log(this.nodes[node1]);
  //console.log(this.nodes[node2]);
  if (this.nodes[node1].includes(node2)) { 
    return true;
  } else {
    return false;
  }
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(node1, node2) {
  this.nodes[node1].push(node2);
  this.nodes[node2].push(node1);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(node1, node2) {
  var i1 = this.nodes[node1].indexOf(node2);
  var i2 = this.nodes[node2].indexOf(node1);

  this.nodes[node1].splice(i1, 1);
  this.nodes[node2].splice(i2, 1);
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.nodes) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

//var Node1 = function(value) {
 // var node = {};

//  node.value = value;
//  node.edges = [];

 // return node;
//};

