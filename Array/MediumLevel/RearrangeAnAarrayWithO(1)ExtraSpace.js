/* AMAZON
===========
Given an array arr[] of size N where every element is in the range from 0 to n-1. Rearrange the given array so that the transformed array arrT[i] becomes arr[arr[i]].

NOTE: arr and arrT are both same variables, representing the array before and after transformation respectively.

Example 1:

Input:
N = 2
arr[] = {1,0}
Output: 0 1

Explanation: 
arr[arr[0]] = arr[1] = 0
arr[arr[1]] = arr[0] = 1
So, arrT becomes {0, 1}

Example 2:

Input:
N = 5
arr[] = {4,0,2,1,3}
Output: 3 4 2 0 1

Explanation: 
arr[arr[0]] = arr[4] = 3
arr[arr[1]] = arr[0] = 4
arr[arr[2]] = arr[2] = 2
arr[arr[3]] = arr[1] = 0
arr[arr[4]] = arr[3] = 1
and so on
So, arrT becomes {3, 4, 2, 0, 1}

Your Task:
You don't need to read input or print anything. The task is to complete the function arrange() which takes arr and N as input parameters and rearranges the elements in the array in-place.
*/
let arr = [1,0];
let n = 2;
let ans = [];
for(let i=0;i<n;i++){
    ans.push(arr[arr[i]]);
}
for(let i=0;i<n;i++){
    arr[i]=ans[i]
}
console.log(arr);

/*
class Solution {
    
    //Function to rearrange an array so that arr[i] becomes arr[arr[i]]
    //with O(1) extra space.
    arrange(arr, n){
        // code here
        let ans = [];
for(let i=0;i<n;i++){
    ans.push(arr[arr[i]]);
}
for(let i=0;i<n;i++){
    arr[i]=ans[i];
}
return arr;
    }
}
*/

