/* HUNAN ASSET
================
Given an unsorted array Arr of length N. Your task is to find the maximum difference between the successive elements in its sorted form.
Return 0 if the array contains less than 2 elements.

Example 1:

Input:
N = 3
Arr[] = {1, 10, 5}
Output: 5

Explanation: The maximum difference
between  successive elements of array
is 5(abs(5-10)).

Your Task:
Complete the function maxSortedAdjacentDiff() which takes array arr and size n, as input parameters and returns an integer representing the answer. You don't to print answer or take inputs.
*/
let arr = [1,10,5];
let n = 3;
let ans = 0;
let maxdiff = Number.MIN_VALUE;
let maxend = 0;
if(n<2){
    console.log(0);
}
arr.sort((a,b)=>a-b);
for(let i=1;i<n;i++){
    maxend = Math.abs(arr[i-1]-arr[i])
    if(maxend>maxdiff){
        maxdiff=maxend;
    }
}
console.log(maxdiff);

/*
class Solution {
  maxSortedAdjacentDiff(arr,n) {
      // code here
      let ans = 0;
let maxdiff = Number.MIN_VALUE;
let maxend = 0;
if(n<2){
    return 0;
}
arr.sort((a,b)=>a-b);
for(let i=1;i<n;i++){
    maxend = Math.abs(arr[i-1]-arr[i])
    if(maxend>maxdiff){
        maxdiff=maxend;
    }
}
return maxdiff;
  }
}
*/