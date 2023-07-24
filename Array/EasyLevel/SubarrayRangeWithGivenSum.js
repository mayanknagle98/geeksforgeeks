/*
Given an unsorted array of integers and a sum. The task is to count the number of subarray which adds to the given sum.

Example 1:

Input:
n = 5
arr[] = {10,2,-2,-20,10}
sum = -10
Output: 3

Explanation: Subarrays with sum -10 are: 
[10, 2, -2, -20], [2, -2, -20, 10] and 
[-20, 10].

Example 2:

Input:
n = 6
arr[] = {1,4,20,3,10,5}
sum = 33
Output: 1

Explanation: Subarray with sum 33 is: 
[20,3,10].

Your Task:
This is a function problem. You only need to complete the function subArraySum() that takes arr, n, sum as parameters and returns the count of subarrays which adds up to the given sum. 
*/
let arr = [10,2,-2,-20,10];
let n = 5;
let sum = -10;
const res = new Map();
let curr_sum = 0;
let count = 0;
for(let i = 0; i < n; ++i) {
    curr_sum += arr[i];
    if(curr_sum === sum){
        count++;
    }
    if(res.has(curr_sum - sum)) {
        count += res.get(curr_sum - sum);
    }
    res.set(curr_sum, (res.get(curr_sum) || 0) + 1);
}
console.log(count);

/*
class Solution {
    subArraySum(arr,n,sum){
       //code here
       const res = new Map();
let curr_sum = 0;
let count = 0;
for(let i = 0; i < n; ++i) {
    curr_sum += arr[i];
    if(curr_sum === sum){
        count++;
    }
    if(res.has(curr_sum - sum)) {
        count += res.get(curr_sum - sum);
    }
    res.set(curr_sum, (res.get(curr_sum) || 0) + 1);
}
return count;
    }
}
*/