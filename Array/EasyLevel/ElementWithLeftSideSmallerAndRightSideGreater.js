/* ZOHO, AMAZON, OYO ROOMS, INTUIT
====================================
Given an unsorted array of size N. Find the first element in array such that all of its left elements are smaller and all right elements to it are greater than it.

Note: Left and right side elements can be equal to required element. And extreme elements cannot be required element.

Example 1:

Input:
N = 4
A[] = {4, 2, 5, 7}
Output:
5

Explanation:
Elements on left of 5 are smaller than 5
and on right of it are greater than 5.
 
Example 2:

Input:
N = 3
A[] = {11, 9, 12}
Output:
-1
 
Your Task:  
You don't need to read input or print anything. Your task is to complete the function findElement() which takes the array A[] and its size N as inputs and returns the required element. If no such element present in array then return -1.
*/
let arr = [4,2,5,7];
let n = 4;
let res = -1;
let ans = arr[0]
for(let i=0;i<n;i++){
    if(arr[i]>=ans&&res==-1&&i!=0&&i!=n-1){
        ans=arr[i];
        res=ans;
    }
    else if(arr[i]<ans){
        res=-1;
    }
}
console.log(res);

/*
class Solution{
    findElement(arr,n){
        //code here
        let res = -1;
let ans = arr[0]
for(let i=0;i<n;i++){
    if(arr[i]>=ans&&res==-1&&i!=0&&i!=n-1){
        ans=arr[i];
        res=ans;
    }
    else if(arr[i]<ans){
        res=-1;
    }
}
return res;
    }
}
*/
