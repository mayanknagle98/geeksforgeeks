/* AMAZON, MICROSOFT
======================
Given a sorted array having N elements, find the indices of the first and last occurrences of an element X in the given array.

Note: If the number X is not found in the array, return '-1' as an array.

Example 1:

Input:
N = 4 , X = 3
arr[] = { 1, 3, 3, 4 }
Output:
1 2

Explanation:
For the above array, first occurence
of X = 3 is at index = 1 and last
occurence is at index = 2.

Example 2:

Input:
N = 4, X = 5
arr[] = { 1, 2, 3, 4 }
Output:
-1

Explanation: 
As 5 is not present in the array,
so the answer is -1.

Your Task:
You don't need to read input or print anything. Complete the function firstAndLast() that takes the array arr, its size N and the value X as input parameters and returns a list of integers containing the indices of first and last occurence of X.
*/
let arr = [1, 2, 3, 4];
let n = 4;
let x = 5;

let start = 0;
let end = n-1;
let mid;
let result = [];
while(start<=end){
    mid=Math.floor((start+end)/2);
    if(arr[mid]==x){
        result.push(mid);
        end=mid-1;
    }
    else if(arr[mid]<x){
        start=mid+1;
    }
    else{
        end=mid-1;
    }
}
start =0;
end = n-1;
while(start<=end){
    mid=Math.floor((start+end)/2);
    if(arr[mid]==x){
        result.push(mid);
        start=mid+1;
    }
    else if(arr[mid]<x){
            start=mid+1;
        }
        else{
            end=mid-1;
        }
}
if(result.length===0){
    console.log(-1);
}
result.sort((a,b) => a-b);
console.log([result[0], result[result.length-1]]);

/*
class Solution {
    
    firstAndLast(arr, N, X)
    {
        //your code here
        let start = 0;
let end = N-1;
let mid;
let result = [];
while(start<=end){
    mid=Math.floor((start+end)/2);
    if(arr[mid]==X){
        result.push(mid);
        end=mid-1;
    }
    else if(arr[mid]<X){
        start=mid+1;
    }
    else{
        end=mid-1;
    }
}
start =0;
end = N-1;
while(start<=end){
    mid=Math.floor((start+end)/2);
    if(arr[mid]==X){
        result.push(mid);
        start=mid+1;
    }
    else if(arr[mid]<X){
            start=mid+1;
        }
        else{
            end=mid-1;
        }
}
if(result.length===0){
    return[-1];
}
result.sort((a,b) => a-b);
return [result[0], result[result.length-1]];

    }
}
*/