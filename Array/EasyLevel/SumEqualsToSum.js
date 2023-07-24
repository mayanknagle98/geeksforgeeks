/* AMAZON, OYO ROOMS
======================
Given an array A of N integers. The task is to find if there are two pairs (a, b) and (c, d) such that a+b = c+d.

Example 1:

Input:N=7 A[] = {3, 4, 7, 1, 2, 9, 8} 
Output: 1
Explanation:(3, 7) and (9, 1) are the pairs whose sum are equal.  

Example 2:

Input:N=7 A[] = {65, 30, 7, 90, 1, 9, 8}
Output: 0
 
Your Task:
Since, this is a function problem. You don't need to take any input, as it is already accomplished by the driver code. You just need to complete the function findPairs() that takes array a and n as parameters and return 1 if pair exists else 0.
*/
let arr = [3, 4, 7, 1, 2, 9, 8];
let n = 7;
let sum = 0;
const ump = new Map();
for(let i=0;i<n;i++){
    for(let j=i+1;j<n;j++){
            sum = arr[i]+arr[j];
      if(ump.get(sum)>0){
            console.log(1);
        }
        ump.set(sum, (ump.get(sum) || 0) + 1);
    }
}
console.log(0);

/*
class Solution {
    findPairs(arr,n){
       //code here
       let sum = 0;
const ump = new Map();
for(let i=0;i<n;i++){
    for(let j=i+1;j<n;j++){
            sum = arr[i]+arr[j];
      if(ump.get(sum)>0){
            return 1;
        }
        ump.set(sum, (ump.get(sum) || 0) + 1);
    }
}
return 0;
    }
}
*/