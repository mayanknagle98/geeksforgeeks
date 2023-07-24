/*
Find the missing element from an ordered array arr[], consisting of N elements representing an Arithmetic Progression(AP).

Note: There always exists an element which upon inserting into sequence forms Arithmetic progression. Boundary elements (first and last elements) are not missing.

Example 1:

Input:
N = 6
Arr[] = {2, 4, 8, 10, 12, 14}
Output: 6

Explanation: Actual AP should be 
2, 4, 6, 8, 10, 12, 14.

Example 2:

Input:
N = 6
Arr[] = {1, 6, 11, 16, 21, 31}
Output: 26

Explanation: Actual AP should be 
1, 6, 11, 16, 21, 26, 31.

Your Task:
You don't need to read input or print anything. Your task is to complete the function findMissing() which takes the array of integers arr[] and its size n as input parameters and returns an integer denoting the answer.
*/
let arr = [1, 6, 11, 16, 21, 31];
let n = 6;
let d=(arr[n-1]-arr[0])/n;
let x=arr[0];
for(let i=0;i<n;i++){
    if(arr[i]!=x){
       console.log(x);
    }
    x=x+d;
}
/*
class Solution {
    findMissing(arr,n){
       //code here
      let d=(arr[n-1]-arr[0])/n;
      let x=arr[0];
      for(let i=0;i<n;i++){
          if(arr[i]!=x){
              return x;
          }
          x=x+d;
      }
    }
}
*/