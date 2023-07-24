/*
Given an array Arr of length N, return the count of number of contiguous subarrays for which the sum and product of elements are equal.

Example 1:

Input:
N = 5
Arr[] = {1, 2, 3, 4, 5}
Output: 6

Explanation: All 6 subarrays having sum of
elements  equals to the product of
elements are: {1}, {2}, {3}, {4}, {5},
{1, 2, 3}

Your Task:
Complete the function numOfsubarrays() which takes an array arr, an integer n, as input parameters and returns an integer denoting the answer. You don't to print answer or take inputs.
*/
let arr = [1, 2, 3, 4, 5];
let n = 5;
let result = n;
let sum = 0;
let product = 1;
for(let i=0;i<n;i++){
    sum = sum+arr[i];
    product = product*arr[i];
    for(let j=i+1;j<n;j++){
        sum = sum+arr[j];
        product = product*arr[j];
        if(sum === product){
            result++;
        }
    }
    sum = 0;
    product = 1;
}
console.log(result);

/*
class Solution {
  numOfsubarrays(arr, n) {
    //code here
    let res = n;
let sum = 0;
let prod = 1;
for(let i=0; i<n; i++){
    sum += arr[i];
    prod *= arr[i];
    for(let j=i+1; j<n; j++){
        sum += arr[j];
        prod *= arr[j];
        if(sum === prod){
            res++;
        }
    }
    sum = 0;
    prod = 1;
}
return res;

  }
}
*/