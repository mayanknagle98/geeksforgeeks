/*
Given an array arr[] of integers of size N and a number X, the task is to find the sum of subarray having maximum sum less than or equal to the given value of X.

Example 1:

Input: N = 5, X = 11
arr[] = {1, 2, 3, 4, 5} 
Output:  10

Explanation: Subarray having maximum 
sum is {1, 2, 3, 4}.
 
Example 2:

Input: N = 5, X = 7
arr[] = {2, 4, 6, 8, 10} 
Output:  6

Explanation: Subarray having maximum 
sum is {2, 4} or {6}.

Your Task:
This is a function problem. You don't need to take any input, as it is already accomplished by the driver code. You just need to complete the function calculateMaxSumLength() that takes array arr, integer N, and integer X as parameters and returns maximum sum of any subarray that is less than or equal to x.
*/
let arr = [1, 2, 3, 4, 5];
let n = 5;
let x = 11;
let i=0,j=0,sum=0;
let maxi=0;
   while(j<n){
     sum+=arr[j];
   while(sum>x){
    sum-=arr[i];
    i++;
    }
  maxi=Math.max(sum,maxi);
     j++;
    }
console.log(maxi);

/*
class Solution {
  findMaxSubarraySum(arr, n, sum) {
    //code here
    let i=0,j=0,curr_sum=0;
    let maxi=0;
        while(j<n){
            curr_sum+=arr[j];
         while(curr_sum>sum){
                curr_sum-=arr[i];
                i++;
            }
            maxi=Math.max(curr_sum,maxi);
            j++;
        }
        return maxi;
  }
}
*/