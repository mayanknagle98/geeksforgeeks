/* AMAZON
===========
Given an array arr[] containing positive elements. A and B are two numbers defining a range. The task is to check if the array contains all elements in the given range.

Example 1:

Input: N = 7, A = 2, B = 5
arr[] =  {1, 4, 5, 2, 7, 8, 3}
Output: Yes

Explanation: It has elements between 
range 2-5 i.e 2,3,4,5

Example 2:

Input: N = 7, A = 2, B = 6
arr[] = {1, 4, 5, 2, 7, 8, 3}
Output: No

Explanation: Array does not contain 6.

Your Task:
This is a function problem. You don't need to take any input, as it is already accomplished by the driver code. You just need to complete the function check_elements() that takes array arr, integer N, integer A, and integer B  as parameters and returns the boolean True if array elements contain all elements in the given range else boolean False.

Note: If the array contains all elements in the given range then driver code outputs Yes otherwise, it outputs No
*/
let arr = [1, 4, 5, 2, 7, 8, 3];
let n = 7;
let a = 2;
let b = 6;
let s = new Set();
for(let i=0; i<n; i++){
    if(arr[i]>=a && arr[i]<=b) 
           s.add(arr[i]);
}
if(s.size === Math.abs(b-a)+1){
    return true;
}
return false;

/*
class Solution{
    check_elements(arr, n, A, B){
        //code here
        let s = new Set();
for(let i=0; i<n; i++){
    if(arr[i]>=A && arr[i]<=B) 
         s.add(arr[i]);
}
if(s.size === Math.abs(B-A)+1){
    return true;
}
return false;

    }
}
*/