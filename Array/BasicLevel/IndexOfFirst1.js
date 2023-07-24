/* AMAZON, MAKEMYTRIP
=======================
Given a sorted array consisting 0s and 1s. The task is to find the index of first 1 in the given array.

Example 1:

Input : 
arr[] = {0, 0, 0, 0, 0, 0, 1, 1, 1, 1}
Output : 
6

Explanation:
The index of first 1 in the array is 6.

Example 2:
Input : 
arr[] = {0, 0, 0, 0}
Output : 
-1

Explanation:
1's are not present in the array.
 
Your Task:  
You don't need to read input or print anything. Your task is to complete the function firstIndex() which takes the array A[] and its size N as inputs and returns the index of first 1. If 1 is not present in the array then return -1.
*/
let arr = [0, 0, 0, 0, 0, 0, 1, 1, 1, 1];
let n = 10;
let s = 0;
let e = n - 1;
let index = -1;
while (s <= e) {
  let m = Math.floor((s + e) / 2);
  if (arr[m] == 1) {
    index = m;
    e = m - 1;
  } else {
    s = m + 1;
  }
}
console.log(index);
/*
class Solution{
    firstIndex(arr,n){
        //code here
       let s = 0;
let e = n - 1;
let index = -1;
while (s <= e) {
  let m = Math.floor((s + e) / 2);
  if (arr[m] == 1) {
    index = m;
    e = m - 1;
  } else {
    s = m + 1;
  }
}
return index;
    }
}
*/