/* AMAZON
===========
Given an array arr[] of N elements, the task is to find the maximum sum of lengths of all non-overlapping subarrays with K as the maximum element in the subarray.

Example 1:

Input: N = 9, K = 4
arr[] = {2, 1, 4, 9, 2, 3, 8, 3, 4} 
Output: 5

Explanation: {2, 1, 4} => Length = 3
{3, 4} => Length = 2
So, 3 + 2 = 5 is the answer.

Example 2:

Input: N = 7, K = 4
arr[] = {1, 2, 3, 2, 3, 4, 1} 
Output:  7

Explanation: {1, 2, 3, 2, 3, 4, 1} 
Length = 7.
 
Your Task:
This is a function problem. You don't need to take any input, as it is already accomplished by the driver code. You just need to complete the function calculateMaxSumLength() that takes array arr, integer N, and integer K as parameters and returns the sum of the length of all such subarrays. 
*/

let arr = [2, 1, 4, 9, 2, 3, 8, 3, 4];
let n = 9;
let k = 4;
let flag = false;
let ans = 0;
let count = 0;
for(let i=0;i<n;i++){
    if(arr[i] < k){
        count++;
    }
    else if(arr[i]===k){
        count++;
        flag = true;
    }
    else{
        if(flag){
            ans = ans + count;
        }
        flag = false;
        count = 0;
    }
}
if(flag){
    ans  = ans + count;
}
console.log(ans);

/*
class Solution {
  calculateMaxSumLength(arr, n, k) {
    //code here
    let flag = false;
let ans = 0;
let count = 0;
for(let i=0;i<n;i++){
    if(arr[i] < k){
        count++;
    }
    else if(arr[i]===k){
        count++;
        flag = true;
    }
    else{
        if(flag){
            ans = ans + count;
        }
        flag = false;
        count = 0;
    }
}
if(flag){
    ans  = ans + count;
}
return ans;
  }
}
*/