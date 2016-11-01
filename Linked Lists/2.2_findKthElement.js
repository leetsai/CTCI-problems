// 2.2 Implement an algorithm to find the Kth to last element of a singly linked list.

function findKthElement() {
  // if k = 1 or k = 0, then return the tail
  if (k <= 1) {
    return node.tail;
  }

  let count = 0;
  let slow = node.head;
  let fast = node.head;

  while (fast) {
    // slow won't start until fast hits k from the left
    // effectively when fast.next hits null, k will be at (length - k)
    if (counter >= k) {
      slow = slow.next;
    }
    fast = fast.next;
    count++;
  }
  return count >= k ? slow : null;
}

console.log(kthLastElement(1, LinkedList)); // returns last element in LinkedList
console.log(kthLastElement(2, LinkedList)); // returns 2nd to last element in LinkedList
