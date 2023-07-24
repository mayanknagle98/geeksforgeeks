/* PAYTM, AMAZON
==================
You are given an array A of N positive and/or negative integers and a value K. The task is to find the count of all sub-arrays whose sum is divisible by K.

Example 1:

Input: N = 6, K = 5
arr[] = {4, 5, 0, -2, -3, 1}
Output: 7
Explanation: There are 7 sub-arrays whose 
is divisible by K {4, 5, 0, -2, -3, 1}, {5}, 
{5, 0}, {5, 0, -2, -3}, {0}, {0, -2, -3} 
and {-2, -3}

Example 2:

Input: N = 6, K = 2
arr[] = {2, 2, 2, 2, 2, 2}
Output: 21
Explanation: All subarray sums are 
divisible by 7 

Your Task:
This is a function problem. You don't need to take any input, as it is already accomplished by the driver code. You just need to complete the function subCount() that takes array arr, integer N, and integer K as parameters and returns the desired output.
*/
let arr = [4, 5, 0, -2, -3, 1];
let n = 6;
let k = 5;
const map = new Map();
let sum = 0;
let res = 0;
map.set(sum, 1);
let rem = 0;
for (const val of arr) {
  sum += val;
  rem = sum % k;
  if (rem < 0) rem += k;
  if (map.has(rem)) {
    res += map.get(rem);
  }
  map.set(rem, (map.get(rem) || 0) + 1);
}
console.log(res);
/*
class Solution{
    subCount(arr,n,k){
        //code here
        const map = new Map();
let sum = 0;
let res = 0;
map.set(sum, 1);
let rem = 0;
for (const val of arr) {
  sum += val;
  rem = sum % k;
  if (rem < 0) rem += k;
  if (map.has(rem)) {
    res += map.get(rem);
  }
  map.set(rem, (map.get(rem) || 0) + 1);
}
return res;

    }
}
*/