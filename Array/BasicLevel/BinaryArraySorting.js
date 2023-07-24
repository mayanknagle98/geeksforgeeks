/* PAYTM, ACCOLITE, INTUIT, INFOEDGE
======================================
Given a binary array A[] of size N. The task is to arrange the array in increasing order.
Note: The binary array contains only 0  and 1.
 
Example 1:

Input: 
5
1 0 1 1 0

Output: 
0 0 1 1 1

Explanation: 
After arranging the elements in 
increasing order, elements will be as 
0 0 1 1 1.

Example 2:

Input:
10
1 0 1 1 1 1 1 0 0 0

Output: 
0 0 0 0 1 1 1 1 1 1

Explanation: 
After arranging the elements in 
increasing order, elements will be 
0 0 0 0 1 1 1 1 1 1.

Your Task: This is a function problem. You only need to complete the function binSort() that takes the array A[] and it's size N as parameters and sorts the array. The printing is done automatically by the driver code.
*/
let arr = [1, 0, 1, 1, 1, 1, 1, 0, 0, 0];
let n = 10;
for (let i = 0, z = 0; i < n; i++) {
    if (!arr[i]) {
      [arr[i], arr[z]] = [arr[z], arr[i]];
      z++;
    }
  }
console.log(arr);