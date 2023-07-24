/* FLIPKART, AMAZON, MICROSOFT
=================================
Given an array arr of n elements that is first strictly increasing and then maybe strictly decreasing, find the maximum element in the array.
Note: If the array is increasing then just print the last element will be the maximum value.

Example 1:

Input: 
n = 9
arr[] = {1,15,25,45,42,21,17,12,11}
Output: 45

Explanation: Maximum element is 45.
Example 2:

Input: 
n = 5
arr[] = {1, 45, 47, 50, 5}
Output: 50

Explanation: Maximum element is 50.

Your Task:  
You don't need to read input or print anything. Your task is to complete the function findMaximum() which takes the array arr[], and n as parameters and returns an integer denoting the answer.
*/
let arr = [1, 45, 47, 50, 5];
let n = 5;
let max = arr[0];
for(let i=0;i<n;i++){
    if(max<arr[i]){
        max = arr[i]
    }
}
console.log(max);

/*
class Solution {
    
    findMaximum(arr,n)
    {
        //your code here
        let max = arr[0];
        for(let i=0;i<n;i++){
            if(max<arr[i]){
                max = arr[i];                
            }
        }
        return max;
    }
}
*/

