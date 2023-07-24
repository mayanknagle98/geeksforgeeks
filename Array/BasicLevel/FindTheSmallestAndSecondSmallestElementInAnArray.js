/* AMAZON, GOLDMAN SACHS
==========================
Given an array of integers, your task is to find the smallest and second smallest element in the array. If smallest and second smallest do not exist, print -1.

Example 1:

Input :
5
2 4 3 5 6
Output :
2 3 

Explanation: 
2 and 3 are respectively the smallest 
and second smallest elements in the array.

Example 2:

Input :
6
1 2 1 3 6 7
Output :
1 2 

Explanation: 
1 and 2 are respectively the smallest 
and second smallest elements in the array.

Your Task:  
You don't need to read input or print anything. Your task is to complete the function minAnd2ndMin() which takes the array A[] and its size N as inputs and returns a vector containing the smallest and second smallest element if possible, else return {-1,-1}.
*/
let arr = [2, 4, 3, 5, 6];
let n = 5;

let arr1 = new Array(2);
let first = Number.MAX_VALUE;
let second = Number.MAX_VALUE;
for(let i=0; i<n; i++){
    if(arr[i] < second){
        if(arr[i] < first){
            second = first;
            first = arr[i];
        }else if(arr[i] !== first){
            second = arr[i];
        }
    }
}
if(second === Number.MAX_VALUE){
    console.log(-1);
}
arr1[0] = first;
arr1[1] = second;
console.log(arr1);

/*
class Solution{
    minAnd2ndMin(arr,n){
        //code here
      let arr1 = new Array(2);
      let first = Number.MAX_VALUE;
      let second = Number.MAX_VALUE;
    for(let i=0; i<n; i++){
    if(arr[i] < second){
        if(arr[i] < first){
            second = first;
            first = arr[i];
        }else if(arr[i] !== first){
            second = arr[i];
        }
    }
}
if(second === Number.MAX_VALUE){
    return [-1];
}
arr1[0] = first;
arr1[1] = second;
return arr1;
    }
}
*/