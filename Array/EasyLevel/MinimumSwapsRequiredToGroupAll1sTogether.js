/* ADOBE
==========
Given an array of 0s and 1s, we need to write a program to find the minimum number of swaps required to group all 1s present in the array together.

Example 1:

Input : arr[ ] = {1, 0, 1, 0, 1}
Output : 1

Explanation:
Only 1 swap is required to group all 1's together. 
Swapping index 1 and 4 will give arr[] = {1, 1, 1, 0, 0}.

Example 2:

Input : arr[ ] = {1, 0, 1, 0, 1, 1} 
Output :  1
 
Your Task:
This is a function problem. The input is already taken care of by the driver code. You only need to complete the function minSwaps() that takes an array (arr), sizeOfArray (n) and return the minimum number of swaps required and if no 1's are present print -1. The driver code takes care of the printing.
*/
let arr = [1, 0, 1, 0, 1];
let n = 5;
let cnt_one = 0;
for(let i=0; i<n; i++){
    if(arr[i]){
        cnt_one += 1;
    }
}
if(!cnt_one){
    console.log(-1);
}
let cnt = 0;
for(let i=0; i<cnt_one; i++){
    if(arr[i]){
        cnt += 1;
    }
}
let ans = cnt_one-cnt, l=0, r=cnt_one;
for(let i=0; i+cnt_one<n; i++){
    
    if(arr[l++]){
        cnt -= 1;
    }
    if(arr[r++]){
        cnt += 1;
    }
    ans = Math.min(ans, cnt_one-cnt);
    
}
console.log(ans);

/*
class Solution {
    minSwaps(n, a) {
        // code here
       let cnt_one = 0;
for(let i=0; i<n; i++){
    if(a[i]){
        cnt_one += 1;
    }
}
if(!cnt_one){
    return -1;
}
let cnt = 0;
for(let i=0; i<cnt_one; i++){
    if(a[i]){
        cnt += 1;
    }
}
let ans = cnt_one-cnt, l=0, r=cnt_one;
for(let i=0; i+cnt_one<n; i++){
    
    if(a[l++]){
        cnt -= 1;
    }
    if(a[r++]){
        cnt += 1;
    }
    ans = Math.min(ans, cnt_one-cnt);
}
return ans;
    }
}

*/