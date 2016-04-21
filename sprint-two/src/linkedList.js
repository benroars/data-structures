var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.tail === null) {
      var node = Node(value);
      list.tail = node;
      list.head = node;
    } else {
      var node = Node(value);
      list.tail.next = node;
      list.tail = node;
    }
  };

  list.removeHead = function() {
    if (list.head === null) {
      return null;
    }
    var temp = list.head.next;
    var val = list.head.value;
    list.head.next = null;
    list.head = temp;
    return val;
  };

  list.contains = function(target) {
    var temp = list.head;
    while (temp.next !== null) {
      if (temp.value === target) {
        return true;
      } else {
        temp = temp.next;
      }
    }
    if (temp.next === null) {
      if (temp.value === target) {
        return true;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
