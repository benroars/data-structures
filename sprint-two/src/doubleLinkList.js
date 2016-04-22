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

DoubleLinkList.prototype.contains = function(value) {
  var current = this.head;
  while (true) {
    if (current.value === value) {
      return true;
    } else if (current.right === null) {
      if (current.value === value) {
        return true;
      } else {
        return false;
      }
    } else if (current.right !== null) {
      current = current.right;
    } else {
      break;
    }
  }

  return false;
};

var Node = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

var doub = new DoubleLinkList();
//doub.addToTail(5);
//doub.addToTail(4);
//doub.addToTail(3);
//doub.addToTail(2);
//var x = doub.removeHead();
//var x = doub.contains(5);
//console.log(x);

