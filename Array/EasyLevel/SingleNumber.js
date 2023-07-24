/* AMAZON
===========
Given an array Arr of positive integers of size N where every element appears even times except for one. Find that number occuring odd number of times.

Example 1:

Input: 
N = 5
Arr[] = {1, 1, 2, 2, 2}
Output: 2

Explanation: In the given array all
element appear two times except 2
which appears thrice.

Example 2:

Input: 
N = 7
Arr[] = {8, 8, 7, 7, 6, 6, 1}
Output: 1

Explanation: In the given array all
element appear two times except 1
which appears once.

Your Task:  
You don't need to read input or print anything. Your task is to complete the function getSingle() which takes the array of integers arr[] and n as parameters and returns a integer denoting the answer.
*/
let arr = [1, 1, 2, 2, 2];
let n = 5;
let a = 0;
for(let i=0;i<n;i++){
    a=a^arr[i];
}
console.log(a)

/*
class Solution{
    getSingle(arr,n){
        //code here
      let a = 0;
for(let i=0;i<n;i++){
    a=a^arr[i];
}
return a;
}
}
*/