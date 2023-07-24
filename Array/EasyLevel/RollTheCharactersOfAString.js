/* AIRTEL
============
Given a string S and an array roll where roll[i] represents rolling first roll[i] characters in the string, the task is to apply every roll[i] on the string and output the final string. Rolling means increasing the ASCII value of character, like rolling z would result in a, rolling b would result in c, etc.

Example 1:

Input: s = "bca"
roll[] = {1, 2, 3} 
Output: eeb

Explanation: arr[0] = 1 means roll 
first character of string -> cca
arr[1] = 2 means roll 
first two characters of string -> dda
arr[2] = 3 means roll
first three characters of string -> eeb
So final ans is "eeb".
 
Example 2:

Input: s = "zcza"
roll[] = {1, 1, 3, 4}
Output: debb
 
Your Task:
This is a function problem. You don't need to take any input, as it is already accomplished by the driver code. You just need to complete the function findRollOut() that takes String S, array roll, and integer N as parameters and returns the modified string.
*/
let s = "bca";
let roll = [1,2,3];
let n = 3;
let hash = new Array(n+2).fill(0);
for(let i=0; i<n; i++)[
    hash[roll[i]]++
]
for(let i=n; i>=0; i--){
    hash[i] += hash[i+1];
}
for(let i=1; i<=n; i++){
    s[i-1] = String.fromCharCode(((s[i-1].charCodeAt(0)-97)+hash[i])%26 + 97);
}
console.log(s);

/*
class Solution{
    findRollOut(s, roll,n){
        //code here
      let hash = new Array(n+2).fill(0);
for(let i=0; i<n; i++){
    hash[roll[i]]++
}
for(let i=n; i>=0; i--){
    hash[i] += hash[i+1];
}
for(let i=1; i<=n; i++){
    s[i-1] = String.fromCharCode(((s[i-1].charCodeAt(0)-97)+hash[i])%26 + 97);
}
return s;
    }
}
*/