/* FLIPKART, AMAZON
======================
Given an array of n elements, where each element is at most k away from its target position, you need to sort the array optimally.

Example 1:

Input:
n = 7, k = 3
arr[] = {6,5,3,2,8,10,9}
Output: 2 3 5 6 8 9 10

Explanation: The sorted array will be
2 3 5 6 8 9 10

Example 2:

Input:
n = 5, k = 2
arr[] = {3,1,4,2,5}
Output: 1 2 3 4 5 

Note: DO NOT use STL sort() function for this question.

Your Task:
You are required to complete the method nearlySorted() which takes 3 arguments and returns the sorted array.
*/
let arr = [3,1,4,2,5];
let n = 5;
for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
        if(arr[j]>arr[j+1]){
            let temp=arr[j];
            arr[j]=arr[j+1]
            arr[j+1]=temp;
        }
    }
}
console.log(arr);

/*
class Solution {
  nearlySorted(arr,num,k){
    //code here
   return arr.sort((a,b)=>a-b)
  }
}
*/
