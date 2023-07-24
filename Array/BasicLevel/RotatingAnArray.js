/*
Given an array of size N. The task is to rotate array by D elements where D ≤ N.

Example 1:

Input:
N = 7
Arr[] = {1, 2, 3, 4, 5, 6, 7}
D = 2
Output: 3 4 5 6 7 1 2

Explanation: 
Rotate by 1: [2, 3, 4, 5, 6, 7, 1]
Rotate by 2: [3, 4, 5, 6, 7, 1, 2]

Example 2:

Input:
N = 4
Arr[] = {1, 3, 4, 2}
D = 3
Output: 2 1 3 4

Your Task:
You don't need to read input or print anything. Your task is to complete the function leftRotate() which takes the array of integers arr[], its size n and d as input parameters and rotates arr[] in-place without using any extra memory.
*/
let arr = [1, 2, 3, 4, 5, 6, 7];
let n = 7;
let d = 2;
const temp = new Array(d);
for(let i=0;i<d;i++){
    temp[i]=arr[i];
}
for(let i=0;i<n-d;i++){
    arr[i]=arr[i+d];
}
let j=0;
for(let i=n-d;i<n;i++){
    arr[i]=temp[j++];
}
console.log(arr);

/*
class Solution{
    leftRotate(arr,n,d){
        //code here
       const temp = new Array(d);
for(let i = 0; i < d; i++){
    temp[i] = arr[i];
}
for(let i = 0; i < n - d; i++){
    arr[i] = arr[i + d];
}
let j = 0;
for(let i = n - d; i < n; i++){
    arr[i] = temp[j++];
}

    }
}
*/