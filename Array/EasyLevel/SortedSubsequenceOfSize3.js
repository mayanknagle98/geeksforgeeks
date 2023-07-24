/* AMAZON, FACTSET, WALMART
=============================
Given an array A of N integers, find any 3 elements in it such that A[i] < A[j] < A[k] and i < j < k.

Example 1:

Input:
N = 5
A[] = {1,2,1,1,3}
Output: 1

Explanation: a sub-sequence 1 2 3 exist.

Example 2:

Input:
N = 3
A[] = {1,1,3}
Output: 0
Explanation: no such sub-sequence exist.

Your Task:
Your task is to complete the function find3Numbers which finds any 3 elements in it such that A[i] < A[j] < A[k] and i < j < k. You need to return them as a vector/ArrayList/array (depending on the language cpp/Java/Python), if no such element is present then return the empty vector of size 0.

Note: The output will be 1 if the sub-sequence returned by the function is present in array A or else 0. If the sub-sequence returned by the function is not in the format as mentioned then the output will be -1.
*/
let arr = [1,2,1,1,3];
let n = 5;

// 202 test case pass
let A=arr[0], B=Number.MAX_VALUE, MN=A;
       for(let i=1;i<n;i++){
           if(arr[i]<A){
               A=arr[i]
           }
           else if(arr[i]<B&&arr[i]>A){
               B=arr[i];
               MN=A;
           }
           else if(arr[i]>B){
               console.log([MN,B,arr[i]])
           }
       }
       console.log([]);
/*
class Solution {
    
    find3Numbers(a, N)
    {
        //your code here
       let A=a[0], B=Number.MAX_VALUE, MN=A;
       for(let i=1;i<N;i++){
           if(a[i]<A){
               A=a[i]
           }
           else if(a[i]<B&&a[i]>A){
               B=a[i];
               MN=A;
           }
           else if(a[i]>B){
               return [MN,B,a[i]]
           }
       }
       return [];
    }
}
*/