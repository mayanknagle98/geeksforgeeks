/*
Given an array A[] of size n. The task is to find the largest element in it.
 
Example 1:

Input:
n = 5
A[] = {1, 8, 7, 56, 90}
Output: 90

Explanation:
The largest element of given array is 90.
 
Example 2:

Input:
n = 7
A[] = {1, 2, 0, 3, 2, 4, 5}
Output: 5

Explanation:
The largest element of given array is 5.
 
Your Task:  
You don't need to read input or print anything. Your task is to complete the function largest() which takes the array A[] and its size n as inputs and returns the maximum element in the array.
*/
let arr = [1, 2, 0, 3, 2, 4, 5];
let n = 7;
let largest = arr[0];
for(let i=0;i<n;i++){
    if(largest<arr[i]){
        largest = arr[i];
    }
}
console.log(largest);

/*
class Solution {
    largest(arr, n) {
        // write your code here
        let largest = arr[0];
        for(let i=0;i<n;i++){
            if(largest<arr[i]){
                largest=arr[i];
            }
        }
        return largest;
    }
}
*/