/* VMWARE, MICROSOFT, GOOGLE
===============================
Given an array of N strings, find the longest common prefix among all strings present in the array.

Example 1:

Input:
N = 4
arr[] = {geeksforgeeks, geeks, geek, geezer}
Output: gee
Explanation: "gee" is the longest common
prefix in all the given strings.

Example 2:

Input: 
N = 2
arr[] = {hello, world}
Output: -1

Explanation: There's no common prefix
in the given strings.

Your Task:
You don't need to read input or print anything. Your task is to complete the function longestCommonPrefix() which takes the string array arr[] and its size N as inputs and returns the longest common prefix common in all the strings in the array. If there's no prefix common in all the strings, return "-1".
*/
let arr = ["hello", "world"];
let n = 2;
// let ans = "";
// arr.sort((a,b)=>a-b);
// for(let i=0;i<arr[0].length;i++){
//     let x = arr[0];
//     let y = arr[arr.length-1];
//     if(x[i]===y[i]){
//         ans = ans+x[i];
//     }
//     else{
//         break;
//     }
// }
// let res = ans===""?-1:ans;
// console.log(res)
arr.sort();
let i=0;
let j=0;
let res="";
while(i<arr[0].length && j<arr[arr.length-1].length){
    if(arr[0][i]!=arr[arr.length-1][j]){
        break;
    }
    res+=arr[0][i];
    i++;
    j++;
}
if(res===""){
    console.log(-1);
}
console.log(res);

/*
class Solution {
    longestCommonPrefix(arr,n){ 
        //code here
        arr.sort();
let i=0;
let j=0;
let res="";
while(i<arr[0].length && j<arr[arr.length-1].length){
    if(arr[0][i]!=arr[arr.length-1][j]){
        break;
    }
    res+=arr[0][i];
    i++;
    j++;
}
if(res===""){
    return "-1";
}
return res;
    }
}
*/
