/*  ADOBE
============
You are given an array Arr of size N. You need to find all pairs in the array that sum to a number K. If no such pair exists then output will be -1. The elements of the array are distinct and are in sorted order.
Note: (a,b) and (b,a) are considered same. Also, an element cannot pair with itself, i.e., (a,a) is invalid.

Example 1:

Input:
n = 7
arr[] = {1, 2, 3, 4, 5, 6, 7}
K = 8
Output:
3

Explanation:
We find 3 such pairs that
sum to 8 (1,7) (2,6) (3,5)

Example 2:

Input:
n = 7
arr[] = {1, 2, 3, 4, 5, 6, 7}
K = 98 
Output:
-1  

Your Task:
This is a function problem. The input is already taken care of by the driver code. You only need to complete the function Countpair() that takes an array (arr), sizeOfArray (n), an integer K, and return the count of the pairs which add up to the sum K. The driver code takes care of the printing.
*/
let arr = [1, 2, 3, 4, 5, 6, 7];
let n = 7;
let k = 98;
let count=0;
for(let i=0;i<n-1;i++){
    for(let j=i+1;j<n;j++){
        if(arr[i]+arr[j]==k){
            count++;
        }
    }
}
if(count!=0){
    console.log(count);
}
else{
    console.log(-1);
}

/*
class Solution {
  Countpair(arr, n, k) {
    //code here
    let count=0;
for(let i=0;i<n-1;i++){
    for(let j=i+1;j<n;j++){
        if(arr[i]+arr[j]==k){
            count++;
        }
    }
}
if(count!=0){
    return count;
}
else{
    return -1;
}
  }
}
*/