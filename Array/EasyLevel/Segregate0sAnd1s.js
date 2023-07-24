/* PAYTM, GOLDMAN SACHS, FAB.COM
====================================
Given an array of length N consisting of only 0s and 1s in random order. Modify the array to segregate 0s on left side and 1s on the right side of the array.

Example 1:

Input:
N = 5
arr[] = {0, 0, 1, 1, 0}
Output: 0 0 0 1 1

Example 2:

Input:
N = 4
Arr[] = {1, 1, 1, 1}
Output: 1 1 1 1

Explanation: There are no 0 in the given array, 
so the modified array is 1 1 1 1.

Your Task:
You don't need to read input or print anything. Your task is to complete the function segregate0and1() which takes arr[] and n as input parameters and modifies arr[] in-place without using any extra memory.
*/
let arr = [1,1,1,1];
let n = 4;
let ans = [];
for(let i=0;i<n;i++){
    if(arr[i]==0){
        ans.push(arr[i]);
    }
}
for(let i=0;i<n;i++){
    if(arr[i]>0){
        ans.push(arr[i]);
    }
}
for(let i=0;i<n;i++){
    arr[i]=ans[i];
}
console.log(arr);

/*
class Solution {
    segregate0and1(arr,n){
        
        //code here
        let ans = [];
for(let i=0;i<n;i++){
    if(arr[i]==0){
        ans.push(arr[i]);
    }
}
for(let i=0;i<n;i++){
    if(arr[i]>0){
        ans.push(arr[i]);
    }
}
for(let i=0;i<n;i++){
    arr[i]=ans[i];
}
return arr;
    }
}
*/