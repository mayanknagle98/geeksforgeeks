/* PAYTM, AMAZON, FLIPKART, OYO ROOMS, FACTSET, WALMART, ADOBE, OXIGEN WALLET, YAHOO
======================================================================================
Given an array Arr of size N containing positive integers. Find the maximum sum of a subsequence such that no two numbers in the sequence should be adjacent in the array.

Example 1:

Input:
N = 6
Arr[] = {5, 5, 10, 100, 10, 5}
Output: 110

Explanation: If you take indices 0, 3
and 5, then Arr[0]+Arr[3]+Arr[5] =
5+100+5 = 110.

Example 2:

Input:
N = 4
Arr[] = {3, 2, 7, 10}
Output: 13

Explanation: 3 and 10 forms a non
continuous subsequence with maximum
sum.

Your Task:
You don't need to read input or print anything. Your task is to complete the function findMaxSum() which takes the array of integers arr and n as parameters and returns an integer denoting the answer.
*/
let arr = [5, 5, 10, 100, 10, 5];
let n = 6;
const dp = [];
dp[0] = arr[0];
dp[1] = Math.max(arr[0], arr[1]);
for (let i = 2; i < n; i++) {
  dp[i] = Math.max(arr[i] + dp[i - 2], dp[i - 1]);
}
console.log(dp[n - 1]);

/*
class Solution {
  findMaxSum(arr,n){
    //code here
    const dp = [];
dp[0] = arr[0];
dp[1] = Math.max(arr[0], arr[1]);
for (let i = 2; i < n; i++) {
  dp[i] = Math.max(arr[i] + dp[i - 2], dp[i - 1]);
}
return dp[n - 1];
  }
}
*/