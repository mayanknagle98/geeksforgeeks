/* ADOBE
===========
Given an array Arr of N positive integers. Find the number of pairs of integers whose difference is equal to a given number K.
Note: (a, b) and (b, a) are considered same. Also, same numbers at different indices are considered different.

Example 1:

Input: 
N = 5
Arr[] = {1, 5, 3, 4, 2}
K = 3
Output: 2

Explanation: There are 2 pairs with difference 3, 
the pairs are {1, 4} and {5, 2} 
Example 2:

Input: 
N = 6
Arr[] = {8, 12, 16, 4, 0, 20}
K = 4
Output: 5

Explanation: There are 5 pairs with difference 4, 
the pairs are {0, 4}, {4, 8}, 
{8, 12}, {12, 16} and {16, 20} 

Your Task:  
You don't need to read input or print anything. Your task is to complete the function countPairsWithDiffK() which takes the array arr[], n and k as inputs and returns an integer denoting the answer.
*/
let arr = [1, 5, 3, 4, 2];
let n = 5;
let k = 3;
let count = 0;
const mp = new Map();
for (let i = 0; i < n; i++) {
  mp.set(arr[i], (mp.get(arr[i]) || 0) + 1);
}
for (let i = 0; i < n; i++) {
  const tem = k + arr[i];
  if (tem === arr[i]) {
    count += (mp.get(tem) * (mp.get(tem) - 1)) / 2;
    mp.set(tem, 0);
  } else if (mp.has(tem)) {
    count += mp.get(tem);
  }
}
console.log(count);

/*
class Solution {
    countPairsWithDiffK(arr,n,k){
       //code here
       let count = 0;
const mp = new Map();
for (let i = 0; i < n; i++) {
  mp.set(arr[i], (mp.get(arr[i]) || 0) + 1);
}
for (let i = 0; i < n; i++) {
  const tem = k + arr[i];
  if (tem === arr[i]) {
    count += (mp.get(tem) * (mp.get(tem) - 1)) / 2;
    mp.set(tem, 0);
  } else if (mp.has(tem)) {
    count += mp.get(tem);
  }
}
return count;
    }
}
*/