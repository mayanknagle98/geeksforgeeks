/* INFOSYS, ORACLE, WIPRO, LINKEDIN, QUALCOMM, TCS, COGNIZANT, ACCENTURE
==========================================================================
Given a sorted array of size N and an integer K, find the position(0-based indexing) at which K is present in the array using binary search.

Example 1:

Input:
N = 5
arr[] = {1 2 3 4 5} 
K = 4
Output: 3

Explanation: 4 appears at index 3.

Example 2:

Input:
N = 5
arr[] = {11 22 33 44 55} 
K = 445
Output: -1

Explanation: 445 is not present.

Your Task:  
You dont need to read input or print anything. Complete the function binarysearch() which takes arr[], N and K as input parameters and returns the index of K in the array. If K is not present in the array, return -1.
*/
let arr = [11, 22, 33, 44, 55];
let n = 5;
let k = 44;
let start = 0;
let end = n-1;
while(start<=end){
    let mid = Math.floor((start+end)/2);
    if(arr[mid]==k){
        console.log(mid);
    }
    if(arr[mid]<k){
        start=mid+1;
    }
    else{
        end=mid-1;
    }
}
console.log(-1);

/*
class Solution {
    binarysearch(arr, n, k) {
        // code here
        let start = 0;
    let end = n-1;
    while(start<=end){
    let mid = Math.floor((start+end)/2);
    if(arr[mid]==k){
        return mid;
    }
    if(arr[mid]<k){
        start=mid+1;
    }
    else{
        end=mid-1;
    }
}
    return -1;
    }
}
*/