/*
Given an array Arr of size N, print second largest distinct element from an array.

Example 1:

Input: 
N = 6
Arr[] = {12, 35, 1, 10, 34, 1}
Output: 34

Explanation: The largest element of the 
array is 35 and the second largest element
is 34.

Example 2:

Input: 
N = 3
Arr[] = {10, 5, 10}
Output: 5

Explanation: The largest element of 
the array is 10 and the second 
largest element is 5.

Your Task:
You don't need to read input or print anything. Your task is to complete the function print2largest() which takes the array of integers arr and n as parameters and returns an integer denoting the answer. If 2nd largest element doesn't exist then return -1.
*/

let arr = [10,5,10];
let n = 3;

let largest = arr[0];
let secondLargest = -1;

for(let i=0; i<n; i++){
    if(largest<arr[i]){
        largest=arr[i];
    }
}
for(let i=0;i<n;i++){
    if(secondLargest<arr[i]&&arr[i]!=largest){
        secondLargest=arr[i];
    }
}
console.log(secondLargest);
/*
class Solution{
    print2largest(arr,n){
        //code here
       let largest = arr[0];
       let secondLargest = -1;
       for(let i=0;i<n;i++){
          if(largest<arr[i]){
              largest=arr[i];
          }
       }
       for(let i=0;i<n;i++){
           if(secondLargest<arr[i]&&arr[i]!=largest){
               secondLargest=arr[i];
           }
       }
       return secondLargest;
    }
}
*/