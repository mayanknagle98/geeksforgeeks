/* ZOHO, AMAZON
==================
Given two sorted arrays of distinct elements. There is only 1 difference between the arrays. First array has one element extra added in between. Find the index of the extra element.

Example 1:

Input:
N = 7
A[] = {2,4,6,8,9,10,12}
B[] = {2,4,6,8,10,12}
Output: 4

Explanation: In the second array, 9 is
missing and it's index in the first array
is 4.

Example 2:

Input:
N = 6
A[] = {3,5,7,9,11,13}
B[] = {3,5,7,11,13}
Output: 3

Your Task:
You don't have to take any input. Just complete the provided function findExtra() that takes array A[], B[] and size of A[] and return the valid index (0 based indexing).
*/
let arr1 = [3,5,7,9,11,13];
let arr2 = [3,5,7,11,13];
let n = 6;
let start = 0;
let end = n-1;
let mid;
while(start<end){
    mid = Math.floor((start+(end-start)/2));
    if(arr1[mid]==arr2[mid]){
        start = mid+1;
    }
    else{
        end = mid;
    }
}
console.log(start);
/*
class Solution {
    findExtra(a,b,n){
        //code here
        let start = 0;
let end = n-1;
let mid;
while(start<end){
    mid = Math.floor((start+(end-start)/2));
    if(a[mid]==b[mid]){
        start = mid+1;
    }
    else{
        end = mid;
    }
}
return start;
    }
}
*/