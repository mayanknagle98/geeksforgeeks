/* AMAZON, VISA
==================
Given an array arr[] of size N of distinct elements and a number X, find if there is a pair in arr[] with product equal to X.

Example 1:

Input:
N = 4, X = 400
arr[] = {10, 20, 9, 40}
Output: Yes

Explanation: As 10 * 40 = 400.

Example 2:

Input:
N = 4, X = 30
arr[] = {-10, 20, 9, -40}
Output: No

Explanation: No pair with product 30.

Your Task:
You don't need to read input or print anything. Your task is to complete the function isProduct() which takes the arr[], n and x as input parameters and returns an boolean value denoting the answer.
*/
let arr = [10,20,9,40];
let n = 4;
let x = 400;
arr.sort();
let i=0;
let j=n-1;
while(i<=j){
    if(arr[i]*arr[j]==x){
        console.log("true") ;
    }
    else if(arr[i]*arr[j]<x){
        i++;
    }
    else if(arr[i]*arr[j]>x){
        j--;
    }
    if(arr[i]<0){
        console.log("true") ;
    }
}
console.log("false") ;