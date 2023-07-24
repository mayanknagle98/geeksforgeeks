/* ADOBE
==========
Given an array arr[] of positive integers of size N. Reverse every sub-array group of size K.

Note: If at any instance, there are no more subarrays of size greater than or equal to K, then reverse the last subarray (irrespective of its size). You shouldn't return any array, modify the given array in-place.

Example 1:

Input:
N = 5, K = 3
arr[] = {1,2,3,4,5}
Output: 3 2 1 5 4
Explanation: First group consists of elements
1, 2, 3. Second group consists of 4,5.
 
Example 2:

Input:
N = 4, K = 3
arr[] = {5,6,8,9}
Output: 8 6 5 9
 
Your Task:
You don't need to read input or print anything. The task is to complete the function reverseInGroups() which takes the array, N and K as input parameters and modifies the array in-place. 
*/
let arr = [1,2,3,4,5];
let n = 5;
let k = 3;
let brr = new Array(n);
for(let i = 0; i < n; i++){
    brr[i] = arr[i];
}

for(let i = 0; i < n; i=i+k){
    let l = i;
    let r = Math.min(i+k-1 , n-1);
    while(l < r){
        let temp = brr[l];
        brr[l] = brr[r];
        brr[r] = temp;
        l++;
        r--;
    }
}
arr = []; 
for(let i = 0; i < n; i++){
    arr.push(brr[i]);
}
console.log(arr)

/*
class Solution {
    //Function to reverse every sub-array group of size k.
    reverseInGroups(arr, n, k){
        // code here
      let l = 0, r = Math.min(k, n);
while (l <= n) {
  arr.splice(l, r - l, ...arr.slice(l, r).reverse());
  l = l + k;
  r = Math.min(n, r + k);
}
return arr;
    }
}
*/