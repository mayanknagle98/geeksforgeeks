/* AMAZON, MICROSOFT, MAKEMYTRIP
===================================
Given an array of distinct elements. Find the third largest element in it.

Suppose you have A[] = {1, 2, 3, 4, 5, 6, 7}, its output will be 5 because it is the 3 largest element in the array A.

Example 1:

Input:
N = 5
A[] = {2,4,1,3,5}
Output: 3

Example 2:

Input:
N = 2
A[] = {10,2}
Output: -1

Your Task:
Complete the function thirdLargest() which takes the array a[] and the size of the array, n, as input parameters and returns the third largest element in the array. It return -1 if there are less than 3 elements in the given array.
*/
let a = [1,2,4,7,3,5];
let n = 6;


// for(let i=0;i<n;i++){
//     if(first<arr[i]){
//         first=arr[i];
//     }
// }
// for(let i=0;i<n;i++){
//     if(second<arr[i]&&first>arr[i]){
//         second=arr[i];
//     }
// }
// for(let i=0;i<n;i++){
//     if(third<arr[i]&&second>arr[i]){
//         third=arr[i];
//     }
// }
// console.log(third)


let first = a[0];
let second = a[0];
let third = a[0];
if(n<3){
    console.log(-1);
}
for(let i = 0; i < n; i++){
    if(a[i] > first){
        third = second;
        second = first;
        first = a[i];
    }
    else if(a[i] > second && a[i] < first){
        third = second;
        second = a[i];
    }
    else if(a[i] > third && a[i] < second){
        third = a[i];
    }
}
console.log(third);

/*
class Solution {
    
    thirdLargest(a, n)
    {
        //your code here
       let first = Number.MIN_SAFE_INTEGER;
let second = Number.MIN_SAFE_INTEGER;
let third = Number.MIN_SAFE_INTEGER;
if(n<3){
    return -1
}
for(let i = 0; i < n; i++){
    if(a[i] > first){
        third = second;
        second = first;
        first = a[i];
    }
    else if(a[i] > second && a[i] <= first){
        third = second;
        second = a[i];
    }
    else if(a[i] > third && a[i] <= second){
        third = a[i];
    }
}
return third;

    }
}
*/
