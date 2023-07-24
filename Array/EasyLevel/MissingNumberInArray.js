/*  FLIPKART, MORGAN STANLEY, ACCOLITE, AMAZON, MICROSOFT, D-E SHAW, OLA CABS, PAYU, VISA, INTUIT, ADOBE, CISCO, QUALCOMM
=======================================================================================
Given an array of size N-1 such that it only contains distinct integers in the range of 1 to N. Find the missing element.

Example 1:

Input:
N = 5
A[] = {1,2,3,5}
Output: 4

Example 2:

Input:
N = 10
A[] = {6,1,2,8,3,4,7,10,5}
Output: 9

Your Task :
You don't need to read input or print anything. Complete the function MissingNumber() that takes array and N as input  parameters and returns the value of the missing number.
*/
let arr = [6,1,2,8,3,4,7,10,5];
let n = 10;
let total = n*(n+1)/2;
let sum = 0;
for(let i=0;i<n-1;i++){
    sum = sum+arr[i];
}
let missingno = total - sum;
console.log(missingno);

/*
class Solution{
    missingNumber(array,n){
        //code here
       let total = n*(n+1)/2;
       let sum = 0;
       for(let i=0;i<n-1;i++){
           sum = sum+array[i];
       }
       let missingno = total-sum;
       return missingno;
    }
}
*/