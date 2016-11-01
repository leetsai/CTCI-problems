var findCircular = function(node) {
  var tortoise = node.head;
  var hare = node.head.next;

  while(true) {
    if (!hare || !hare.next.next) {
      return false;
    } else if (hare === tortoise || hare.next.next === tortoise) {
      return true;
    } else {
      tortoise = tortoise.next;
      hare = hare.next.next;
    }
  }
};
