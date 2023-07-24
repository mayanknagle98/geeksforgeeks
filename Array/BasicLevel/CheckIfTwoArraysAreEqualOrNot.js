/* GOLDMAN SACHS
==================
Given two arrays A and B of equal size N, the task is to find if given arrays are equal or not. Two arrays are said to be equal if both of them contain same set of elements, arrangements (or permutation) of elements may be different though.
Note : If there are repetitions, then counts of repeated elements must also be same for two array to be equal.

Example 1:

Input:
N = 5
A[] = {1,2,5,4,0}
B[] = {2,4,5,0,1}
Output: 1

Explanation: Both the array can be 
rearranged to {0,1,2,4,5}

Example 2:

Input:
N = 3
A[] = {1,2,5}
B[] = {2,4,15}
Output: 0

Explanation: A[] and B[] have only 
one common value.

Your Task:
Complete check() function which takes both the given array and their size as function arguments and returns true if the arrays are equal else returns false.The 0 and 1 printing is done by the driver code.
*/
let a = [1,2,5];
let b = [2,4,15];
let n = 3;
const m = new Map();
for(let i=0; i<n; i++){
    m.set(a[i], (m.get(a[i]) || 0) + 1);
}
for(let i=0; i<n; i++){
    m.set(b[i], (m.get(b[i]) || 0) - 1);
}
for(let [key, value] of m){
    if(value !== 0){
        console.log(0);
    }
}
console.log(1);
/*
class Solution {
    //Function to check if two arrays are equal or not.
    check(A,B,N){
        // code here
       const m = new Map();
for(let i=0; i<N; i++){
    m.set(A[i], (m.get(A[i]) || 0) + 1);
}
for(let i=0; i<N; i++){
    m.set(B[i], (m.get(B[i]) || 0) - 1);
}
for(let [key, value] of m){
    if(value !== 0){
        return false;
    }
}
return true;
    }
    
}

*/