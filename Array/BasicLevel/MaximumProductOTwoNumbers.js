/* AMAZON
===========
Given an array Arr of size N with all elements greater than or equal to zero. Return the maximum product of two numbers possible.

Example 1:

Input: 
N = 6
Arr[] = {1, 4, 3, 6, 7, 0}  

Output: 42

Example 2:

Input: 
N = 5
Arr = {1, 100, 42, 4, 23}

Output: 4200

Your Task:  
You don't need to read input or print anything. Your task is to complete the function maxProduct() which takes the array of integers arr[] and n as parameters and returns an integer denoting the answer.
*/
let arr = [1, 100, 42, 4, 23];
let n = 5;
let max = arr[0];
let secmax = arr[0];
let ans;
for(let i=0;i<n;i++){
    if(max<arr[i]){
        secmax=max;
        max=arr[i];
    }
    if(secmax<arr[i]&&max>arr[i]){
        secmax=arr[i];
    }
}
ans = max*secmax;
console.log(ans);

/*
class Solution{
    maxProduct(arr,n){
        //code here
       let max =0;
       let secmax=0;
       while(n--){
            if(max<arr[n]){
                secmax = max;
                max = arr[n];
            }    
            else if(secmax<arr[n]){
                secmax = arr[n];
            }
       }
       return max*secmax;
    }
}
*/