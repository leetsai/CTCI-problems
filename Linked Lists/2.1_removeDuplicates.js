// 2.1 Write code to remove duplicates from an unsorted linked list.
// How would you solve this problem if a temporary buffer is not allowed?

function removeDuplicates(node) {
  const bank = {};
  let previous = null;
  let current = node.head;
  while (current) {
    if (bank[current.value]) {
      previous.next = current.next;
    } else {
      bank[current.value] = true;
      previous = current;
    }
    current = current.next;
  }
  return node;
}

function removeDuplicates2(node) {
  let current = node.head;
  // run while current !== null
  while (current) {
    let pointer = current;
    // run while pointer !== null
    while (pointer) {
      if (pointer.next && (current.value === pointer.next.value)) {
        pointer.next = pointer.next.next;
      } else {
        pointer = pointer.next;
      }
    }
    current = current.next;
  }
  return node;
}
