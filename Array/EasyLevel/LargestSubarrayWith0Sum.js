/* AMAZON, MICROSOFT, MAKEMYTRIP
==================================
Given an array having both positive and negative integers. The task is to compute the length of the largest subarray with sum 0.

Example 1:

Input:
N = 8
A[] = {15,-2,2,-8,1,7,10,23}
Output: 5

Explanation: The largest subarray with
sum 0 will be -2 2 -8 1 7.

Your Task:
You just have to complete the function maxLen() which takes two arguments an array A and n, where n is the size of the array A and returns the length of the largest subarray with 0 sum.
*/
let arr = [15,-2,2,-8,1,7,10,23];
let n = 8;
let csum=0;
let fans=0;
const mp = new Map();
for(let i=0;i<n;i++){
    csum+=arr[i];
    if(csum===0)
    {
        fans=Math.max(fans,i+1);
    }
    else{
        if(mp.has(csum))
        {
            fans=Math.max(fans,i-mp.get(csum));
        }
        else{
            mp.set(csum,i);
        }
    }
}
console.log(fans);
/*
class Solution {
    maxLen(arr,n){
        //code here
        let csum=0;
let fans=0;
const mp = new Map();
for(let i=0;i<n;i++){
    csum+=arr[i];
    if(csum===0)
    {
        fans=Math.max(fans,i+1);
    }
    else{
        if(mp.has(csum))
        {
            fans=Math.max(fans,i-mp.get(csum));
        }
        else{
            mp.set(csum,i);
        }
    }
}
return fans;

    }
}
*/