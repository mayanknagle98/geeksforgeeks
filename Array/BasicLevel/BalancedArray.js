/*
Given an array of even size N, task is to find minimum value that can be added to an element so that array become balanced. An array is balanced if the sum of the left half of the array elements is equal to the sum of right half.

Example 1:

Input:
N = 4
arr[] = {1, 5, 3, 2}
Output: 1

Explanation: 
Sum of first 2 elements is 1 + 5  = 6, 
Sum of last 2 elements is 3 + 2  = 5,
To make the array balanced you can add 1.

Example 2:

Input:
N = 6
arr[] = { 1, 2, 1, 2, 1, 3 }
Output: 2

Explanation:
Sum of first 3 elements is 1 + 2 + 1 = 4, 
Sum of last three elements is 2 + 1 + 3 = 6,
To make the array balanced you can add 2. 

Your Task:  
You don't need to read input or print anything. Your task is to complete the function minValueToBalance() which takes the array a[] and N as inputs and returns the desired result.
*/
let arr = [1, 5, 3, 2];
let n = 4;
let sum1=0;
let sum2=0;
let result;
for(let i=0;i<n/2;i++){
    sum1=sum1+arr[i];
}
for(let j=n/2;j<n;j++){
    sum2=sum2+arr[j];
    if(sum1>sum2){
        result = sum1-sum2;
    }
    else{
        result = sum2-sum1;
    }
}
console.log(result);

/*
class Solution {
    minValueToBalance(arr,n){
        //code here
        let sum1=0;
        let sum2=0;
        let result;
    for(let i=0;i<n/2;i++){
    sum1=sum1+arr[i];
    }
    for(let j=n/2;j<n;j++){
    sum2=sum2+arr[j];
    if(sum1>sum2){
        result = sum1-sum2;
    }
    else{
        result = sum2-sum1;
    }
}
    return result;
    }
}
*/