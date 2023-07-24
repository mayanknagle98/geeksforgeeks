/* CISCO
==========
Given an array A of size N, the task is to check if the given array represents a Binary Max Heap.

Example 1:

Input:  arr[] = {90, 15, 10, 7, 12, 2}
Output: True

The given array represents below tree
       90
     /    \
   15      10
  /  \     /
7    12  2
The tree follows max-heap property as every
node is greater than all of its descendants.

Example 2:
Input:  arr[] = {9, 15, 10, 7, 12, 11}
Output: False

The given array represents below tree
       9
     /    \
   15      10
  /  \     /
7    12  11
The tree doesn't follows max-heap property 9 is
smaller than 15 and 10, and 10 is smaller than 11. 
 

Your Task:  
You don't need to read input or print anything. Your task is to complete the function isMaxHeap() which takes the array A[] and its size N as inputs and returns  "1", else print "0" (without quotes).
*/
let arr = [90, 15, 10, 7, 12, 2];
let n = 6;
for(let i=0; i<Math.floor(n/2); i++) {
    if(2*i+1 < n) {
      if(arr[i] < arr[2*i+1]) {
        console.log("false")
      }
    }
    if(2*i+2 < n) {
      if(arr[i] < arr[2*i+2]) {
        console.log("false")
    }
}
}
console.log("true");

// parent is on i
/* left child on 2*i+1
right child on 2*i+2
i starts from index 0

If child i then parent is [i/2]-1
*/

/*
class Solution{
    isMaxHeap(n,arr){
        //code here
        for(let i=0; i<Math.floor(n/2); i++) {
  if(2*i+1 < n) {
    if(arr[i] < arr[2*i+1]) {
      return false;
    }
  }
  if(2*i+2 < n) {
    if(arr[i] < arr[2*i+2]) {
      return false;
    }
  }
}
return true;

    }
}
*/
  