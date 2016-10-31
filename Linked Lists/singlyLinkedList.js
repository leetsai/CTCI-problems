// Node
  // data: stores a value
  // next: points to the next node in the list

// SinglyList
  // length: retrieves the number of nodes in a list
  // head: assigns a node as the head of a list
  // add(value): adds a node to a list
  // searchNodeAt(position): searches for a node at n-position in our list
  // remove(position): removes a node from a list

function Node(data) {
  // stores data
  this.data = data;
  // points to another node
  this.next = null;
}

function SinglyList() {
  this._length = 0;
  this.head = null;
}

SinglyList.prototype.add = function(value) {
  var node = new Node(value);
  var currentNode = this.head;

  if (!currentNode) {
    this.head = node;
    this._length++;

    return node;
  }

  // traverse until currentNode is the last node
  while (currentNode.next) {
    currentNode = currentNode.next;
  }

  // set currentNode to the newly created node
  currentNode.next = node;

  this._length++;

  return node;
}

SinglyList.prototype.searchNodeAt = function(position) {
  var currentNode = this.head;
  var length = this._length;
  var count = 1;
  var message = {failure: "Failure: non-existent node in this list"};

  if (length === 0 || position < 1 || position > length) {
    throw new Error(message.failure);
  }

  while (count < position) {
    currentNode = currentNode.next;
    count++;
  }

  return currentNode;
}

SinglyList.prototype.remove = function(position) {
  var currentNode = this.head;
  var length = this._length;
  var count = 0;
  var message = {failure: "Failure: non-existent node in this list"};
  var beforeNodeToDelete = null;
  var nodeToDelete = null;
  var deletedNode = null;

  if (position < 0 || position > length) {
    throw new Error(message.failure);
  }

  if (position === 1) {
    this.head = currentNode.next;
    deletedNode = currentNode;
    currentNode = null;
    this._length--;

    return deletedNode;
  }

  while (count < position) {
    beforeNodeToDelete = currentNode;
    nodeToDelete = currentNode.next;
    count++;
  }

  beforeNodeToDelete.next = nodeToDelete.next;
  deletedNode = nodeToDelete;
  nodeToDelete = null;
  this._length--;

  return deletedNode;
}
