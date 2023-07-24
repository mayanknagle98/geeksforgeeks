/*
Given an array of n distinct elements. Check whether the given array is a k sorted array or not. A k sorted array is an array where each element is at most k distance away from its target position in the sorted array.

Example 1:

Input:
N=6
arr[] = {3, 2, 1, 5, 6, 4} 
K = 2
Output: Yes

Explanation:
Every element is at most 2 distance 
away from its target position in the
sorted array.  

Example 2:

Input:
N=7
arr[] = {13, 8, 10, 7, 15, 14, 12}
K = 1
Output: No

Your Task:
Since, this is a function problem. You don't need to take any input, as it is already accomplished by the driver code. You just need to complete the function isKSortedArray() that takes array arr, integer n and integer k as parameters and return "Yes" if the array is a k sorted array else return "No".
*/
let arr = [13, 8, 10, 7, 15, 14, 12];
let n = 7;
let k = 1;
let m = new Map();
  for(let i=0;i<n;i++){
      m[arr[i]]=i;
   }
  arr.sort((a,b)=>a-b);
  for(let i=0;i<n;i++){
      if(Math.abs(m[arr[i]]-i)>k){
          console.log("No");
      }
  }
  console.log("Yes");

/*
class Solution {
  isKSortedArray(arr, n, k) {
    //code here
    let m = new Map();
    for(let i=0;i<n;i++){
        m[arr[i]]=i;
    }
    arr.sort((a,b)=>a-b);
    for(let i=0;i<n;i++){
        if(Math.abs(m[arr[i]]-i)>k){
            return "No"
        }
    }
    return "Yes"
  }
}
*/
   