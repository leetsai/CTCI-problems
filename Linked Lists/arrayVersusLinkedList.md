# Arrays versus Linked Lists

## What Arrays are like
* The size of an array is fixed
* Inserting a new element in an array is expensive
   - Room needs to be created
   - Elements may need to be shifted
* Deleting is also expensive
   - See Inserting reasoning

## What Linked List has over arrays are:
1. Dynamic size
2. Ease of insertion and deletion

## Linked List drawbacks
1. Random access is not allowed
   - We have to start from the first node and jump from node to node
2. The pointers use extra memory
3. Arrays have better cache locality, which makes a big difference in performance
