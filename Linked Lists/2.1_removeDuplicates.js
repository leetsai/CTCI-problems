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
  while (current) {
    let runner = current;
    while (runner) {
      if (runner.next && runner.next.value === current.value) {
        runner.next = runner.next.next;
      } else {
        runner = runner.next;
      }
    }
    current = current.next;
  }
  return node;
}


function removeDuplicates2(node) {
  let current = node.head;
  while (current) {
    let runner = current;
    while (runner) {
      if (runner.next && runner.next.value === current.value) {
        runner.next = runner.next.next
      } else {
        runner = runner.next;
      }
    }
    current = current.next;
  }
  return node;
}
