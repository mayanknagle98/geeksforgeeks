/* ACCOLITE, AMAZON, VISA, ADOBE, GOOGLE
==========================================
An element is called a peak element if its value is not smaller than the value of its adjacent elements(if they exists).
Given an array arr[] of size N, Return the index of any one of its peak elements.
Note: The generated output will always be 1 if the index that you return is correct. Otherwise output will be 0. 

Example 1:

Input: 
N = 3
arr[] = {1,2,3}
Possible Answer: 2
Generated Output: 1

Explanation: index 2 is 3.
It is the peak element as it is 
greater than its neighbour 2.
If 2 is returned then the generated output will be 1 else 0.

Example 2:

Input:
N = 3
arr[] = {3,4,2}
Possible Answer: 1
Output: 1

Explanation: 4 (at index 1) is the 
peak element as it is greater than 
it's neighbor elements 3 and 2.
If 1 is returned then the generated output will be 1 else 0.

Your Task:
You don't have to read input or print anything. Complete the function peakElement() which takes the array arr[] and its size N as input parameters and return the index of any one of its peak elements.

*/
let arr = [1,2,3];
let n = 3;
let peak = 0;
for(let i =0;i<n-1;i++){
    if(arr[i]<arr[i+1]){
        peak = i+1;
    }
}
console.log(peak);

/*

class Solution {
    
    peakElement(arr, n)
    {
        // code here
           let peak = 0;
      for(let i =0;i<n-1;i++){
          if(arr[i]<arr[i+1]){
              peak = i+1;
          }
      }
      return peak;
    }
}
*/