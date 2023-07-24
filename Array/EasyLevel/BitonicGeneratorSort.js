/* ZOHO
========
Given an array arr[] of N distinct numbers, the task is to sort all even-placed numbers in increasing and odd-place numbers in decreasing order. The modified array should contain all sorted even-placed numbers followed by reverse sorted odd-placed numbers.
Note that the first element is considered as even because of its index 0.

Example 1:

Input: N = 8
arr[] = {0, 1, 2, 3, 4, 5, 6, 7}
Output: 0 2 4 6 7 5 3 1

Explanation: 
Even-place elements : 0, 2, 4, 6
Odd-place elements : 1, 3, 5, 7
Even-place elements in increasing order : 
0, 2, 4, 6
Odd-Place elements in decreasing order : 
7, 5, 3, 1

Example 2:

Input: N = 9
arr[] = {3, 1, 2, 4, 5, 9, 13, 14, 12}
Output: 2 3 5 12 13 14 9 4 1

Explanation: 
Even-place elements : 3, 2, 5, 13, 12
Odd-place elements : 1, 4, 9, 14
Even-place elements in increasing order : 
2, 3, 5, 12, 13
Odd-Place elements in decreasing order : 
14, 9, 4, 1

Your Task:
This is a function problem. You don't need to take any input, as it is already accomplished by the driver code. You just need to complete the function bitonicGenerator() that takes array arr and integer N as parameters and modify the array according to the above condition.
*/
let arr = [0, 1, 2, 3, 4, 5, 6, 7];
let n = 8;
let asc = [];
let dsc = [];
let l = 0;
for(let i=0;i<n;i++){
    if(i%2==0){
        asc.push(arr[i]);
    }
    else{
        dsc.push(arr[i]);
    }
}
asc.sort((a,b)=>a-b);
dsc.sort((a,b)=>a-b);
dsc.reverse();
for(let j=0;j<asc.length;j++){
    arr[j] = asc[j]
}
for(let k=asc.length;k<n;k++){
    arr[k] = dsc[l++];
}
console.log(arr);
/*
class Solution {
  bitonicGenerator(arr, n) {
    //code here
let asc = [];
let dsc = [];
let l = 0;
for(let i=0;i<n;i++){
    if(i%2==0){
        asc.push(arr[i]);
    }
    else{
        dsc.push(arr[i]);
    }
}
asc.sort((a,b)=>a-b);
dsc.sort((a,b)=>a-b);
dsc.reverse();
for(let j=0;j<asc.length;j++){
    arr[j] = asc[j]
}
for(let k=asc.length;k<n;k++){
    arr[k] = dsc[l++];
}
    return arr;
  }
}
*/