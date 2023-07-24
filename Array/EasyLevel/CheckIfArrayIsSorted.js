/*
Given an array arr[] of size N, check if it is sorted in non-decreasing order or not. 

Example 1:

Input:
N = 5
arr[] = {10, 20, 30, 40, 50}
Output: 1

Explanation: The given array is sorted.

Example 2:

Input:
N = 6
arr[] = {90, 80, 100, 70, 40, 30}
Output: 0

Explanation: The given array is not sorted.

Your Task:
You don't need to read input or print anything. Your task is to complete the function arraySortedOrNot() which takes the arr[] and N as input parameters and returns a boolean value (true if it is sorted otherwise false).
*/
let arr = [10, 20, 30, 40, 50];
let n = 5;
let isSorted = 1;
for(let i=0;i<n;i++){
    if(arr[i]>arr[i+1]){
        isSorted = 0;
    }
}
console.log(isSorted);

/*
class Solution {
    arraySortedOrNot(arr, n) {
        // code here
        let isSorted = true;
for(let i=0;i<n;i++){
    if(arr[i]>arr[i+1]){
        isSorted = false;
    }
}
        return isSorted;
    }
}
*/