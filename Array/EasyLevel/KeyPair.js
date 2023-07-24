/* ZOHO, FLIPKART, MORGAN STANLEY, ACCOLITE, AMAZON, MICROSOFT, FACTSET, HIKE, ADOBE, GOOGLE, WIPRO, SAP LABS, CARWALE
=========================================================================================
Given an array Arr of N positive integers and another number X. Determine whether or not there exist two elements in Arr whose sum is exactly X.

Example 1:

Input:
N = 6, X = 16
Arr[] = {1, 4, 45, 6, 10, 8}
Output: Yes

Explanation: Arr[3] + Arr[4] = 6 + 10 = 16

Example 2:

Input:
N = 5, X = 10
Arr[] = {1, 2, 4, 3, 6}
Output: Yes

Explanation: Arr[2] + Arr[4] = 4 + 6 = 10

Your Task:
You don't need to read input or print anything. Your task is to complete the function hasArrayTwoCandidates() which takes the array of integers arr, n and x as parameters and returns a boolean denoting the answer.
*/
let arr = [1, 2, 4, 3, 6];
let n = 5;
let x = 10;
const mp = new Map();
for(let i=0; i<n; i++) {
  if(mp.get(x-arr[i]) !== undefined) {
    console.log("Yes");
  }
  mp.set(arr[i], (mp.get(arr[i]) || 0) + 1);
}
console.log("No");

/*
class Solution {
    hasArrayTwoCandidates(arr,n,x){
        //code here
        const mp = new Map();
for(let i=0; i<n; i++) {
  if(mp.get(x-arr[i]) !== undefined) {
    return true;
  }
  mp.set(arr[i], (mp.get(arr[i]) || 0) + 1);
}
return false;
    }
}
*/