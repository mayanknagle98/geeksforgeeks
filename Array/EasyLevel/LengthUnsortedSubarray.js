/*  FLIPKART, MICROSOFT, MAKEMYTRIP, ADOBE
=============================================
Given an unsorted array Arr of size N. Find the subarray Arr[s...e] such that sorting this subarray makes the whole array sorted.

Example 1:

Input:
N = 11
Arr[] ={10,12,20,30,25,40,32,31,35,50,60}
Output: 3 8

Explanation: Subarray starting from index
3 and ending at index 8 is required
subarray. Initial array: 10 12 20 30 25
40 32 31 35 50 60 Final array: 10 12 20
25 30 31 32 35 40 50 60
(After sorting the bold part)

Example 2:

Input:
N = 9
Arr[] = {0, 1, 15, 25, 6, 7, 30, 40, 50}
Output: 2 5

Explanation: Subarray starting from index
2 and ending at index 5 is required
subarray.
Initial array: 0 1 15 25 6 7 30 40 50
Final array:   0 1 6 7 15 25 30 40 50
(After sorting the bold part)

Your Task:
You don't need to read input or print anything. Your task is to complete the function printUnsorted() which takes the array of integers arr and n as parameters and returns a pair of integers denoting {s, e}. If no such subarray exists, return {0, 0}.
*/
let arr = [0, 1, 15, 25, 6, 7, 30, 40, 50];
let n=9;
let least = arr[n-1], left = 0, right = 0;
for(let i = n - 1; i >= 0; i--){
    least = Math.min(least, arr[i]);
    if(least !== arr[i]){
        left = i;
    }
}
let max = arr[0];
for(let i = 0; i < n; i++){
    max = Math.max(max, arr[i]);
    if(max !== arr[i]){
        right = i;
    }
}
console.log(left,right);

/*
class Solution {
    printUnsorted(arr,n){
        //code here
        let leastSoFar = Number.MAX_SAFE_INTEGER, left = 0, right = 0;
for(let i = n - 1; i >= 0; i--){
    leastSoFar = Math.min(leastSoFar, arr[i]);
    if(leastSoFar !== arr[i]){
        left = i;
    }
}
let maxSoFar = Number.MIN_SAFE_INTEGER;
for(let i = 0; i < n; i++){
    maxSoFar = Math.max(maxSoFar, arr[i]);
    if(maxSoFar !== arr[i]){
        right = i;
    }
}
return [left, right];
    }
}
*/
