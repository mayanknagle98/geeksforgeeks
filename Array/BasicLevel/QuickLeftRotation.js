/*
Given an array arr[] of size N and an integer K, the task is to left rotate the array K indexes.

Example 1:

Input: N = 7, K = 2
arr[] = {1, 2, 3, 4, 5, 6, 7}
Output: 3 4 5 6 7 1 2

Explanation: Rotation of the above 
array by 2 will make the output array .

Example 2:

Input: N = 6, K = 12
arr[] = {1, 2, 3, 4, 5, 6}
Output: 1 2 3 4 5 6

Your Task:
This is a function problem. You don't need to take any input, as it is already accomplished by the driver code. You just need to complete the function leftRotate() that takes array arr, integer K and integer N as parameters and rotate the given array by d value.
*/
let arr = [1, 2, 3, 4, 5, 6, 7];
let n = 7;
let k = 2;
const x = k % n;
if (x === 0) {
  console.log("return");
}
const v = [];
for (let i = 0; i < x; i++) {
  v.push(arr[i]);
}
let j = 0;
for (let i = x; i < n; i++) {
  arr[j] = arr[i];
  j++;
}
for (let i = 0; i < v.length; i++) {
  arr[j] = v[i];
  j++;
}
console.log(arr);

/*
class Solution {
        
    leftRotate(arr,k,n){
       //code here
       const x = k % n;
if (x === 0) {
  return;
}
const v = [];
for (let i = 0; i < x; i++) {
  v.push(arr[i]);
}
let j = 0;
for (let i = x; i < n; i++) {
  arr[j] = arr[i];
  j++;
}
for (let i = 0; i < v.length; i++) {
  arr[j] = v[i];
  j++;
}
return arr;
    }
}
*/