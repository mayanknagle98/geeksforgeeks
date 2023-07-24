/*
Given an array A of size N of integers. Your task is to find the minimum and maximum elements in the array.

Example 1:

Input:
N = 6
A[] = {3, 2, 1, 56, 10000, 167}
Output:
min = 1, max =  10000
 
Example 2:

Input:
N = 5
A[]  = {1, 345, 234, 21, 56789}
Output:
min = 1, max = 56789
 
Your Task:  
You don't need to read input or print anything. Your task is to complete the function getMinMax() which takes the array A[] and its size N as inputs and returns the minimum and maximum element of the array.

*/
let arr = [3, 2, 1, 56, 10000, 167];
let n = 6;
// let mi = Number.MAX_SAFE_INTEGER;
// let ma = Number.MIN_SAFE_INTEGER;
// for(let i=0;i<n;i++){
//     mi = Math.min(arr[i], mi);
//     ma = Math.max(arr[i], ma);
// }
// console.log(mi)
// console.log(ma)

// let mi = arr[0];
// let ma = arr[0];
// for(let i=1;i<n;i++){
//     if(mi>arr[i]){
//         mi=arr[i];
//     }
//     if(ma<arr[i]){
//         ma=arr[i];
//     }
// }
// console.log(mi)
// console.log(ma)

let max = Number.MIN_SAFE_INTEGER;
let min = Number.MAX_SAFE_INTEGER;
for(let i=0; i<n; i++) {
    max = max < arr[i] ? arr[i] : max;
    min = min > arr[i] ? arr[i] : min;
}
console.log(min)
console.log(max)