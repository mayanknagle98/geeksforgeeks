/* ORACLE
===========
Given an array arr[] of N values, the task is to find the number which has the maximum number of zeroes. If there are no zeroes then print -1.

Note: If there are multiple numbers with the same (max) number of zeroes then print the Maximum number among them.

Example 1:

Input: N = 5
arr[] = {10, 20, 3000, 9999, 200}
Output:  3000

Explanation: 3000 contains 3 zero's 
in it.

Example 2:

Input: N = 4
arr[] = {1, 2, 3, 4}
Output:  -1

Explanation: No zero is present.
 
Your Task:
This is a function problem. You don't need to take any input, as it is already accomplished by the driver code. You just need to complete the function MaxZero() that takes array arr[] and integer N as parameters and returns the number with the maximum number of zeroes.
*/
let a = [10, 20, 3000, 9999, 200];
let n = 5;
let ans = -1;
let num = "-1";
for(let i=0; i<n; i++){
    let cnt = 0;
    for(let j=0; j<a[i].length; j++){
        cnt += (a[i][j] === '0');
    }
    if(cnt > ans){
        ans = cnt;
        num = a[i];
    }
    if(cnt === ans){
        if(a[i].length > num.length){
            num = a[i];
        }
        else if(a[i].length === num.length && a[i]>num){
            num = a[i];
        }
    }
}
let result = ans === 0 ? "-1" : num ;
console.log(result);

/*
class Solution {
    MaxZero(a,n){
       //code here
      let ans = -1;
let num = "-1";
for(let i=0; i<n; i++){
    let cnt = 0;
    for(let j=0; j<a[i].length; j++)
        cnt += (a[i][j] === '0');
    if(cnt > ans){
        ans = cnt;
        num = a[i];
    }
    if(cnt === ans){
        if(a[i].length > num.length)
            num = a[i];
        else if(a[i].length === num.length && a[i]>num)
            num = a[i];
    }
}
return ans === 0 ? "-1" : num ;
    }
}
*/