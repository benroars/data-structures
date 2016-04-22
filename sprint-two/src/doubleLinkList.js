var DoubleLinkList = function() {
 // this.value = value;
  this.head = null;
  this.tail = null;
};

DoubleLinkList.prototype.addToTail = function(value) {
  var node = new Node(value);

  if (this.head === null && this.tail === null) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.right = node;
    node.left = this.tail;
    this.tail = node;
  }
};

DoubleLinkList.prototype.removeHead = function() {
  var val = this.head.value;

  this.head = this.head.right;
  this.head.left = null;

  return val;
};

DoubleLinkList.prototype.contains = function(node) {

};

var Node = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

//var doub = new DoubleLinkList();
//doub.addToTail(5);
//doub.addToTail(4);
//doub.addToTail(3);
//doub.addToTail(2);
//var x = doub.removeHead();
//var y = doub.removeHead();
//console.log(doub, x, y);

