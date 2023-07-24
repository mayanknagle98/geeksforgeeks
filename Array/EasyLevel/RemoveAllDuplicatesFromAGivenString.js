/* AMAZON, MICROSOFT, ADOBE
=============================
Given a string Str which may contains lowercase and uppercase chracters. The task is to remove all duplicate characters from the string and find the resultant string. The order of remaining characters in the output should be same as in the original string.

Example 1:

Input:
Str = geeksforgeeks
Output: geksfor

Explanation: After removing duplicate
characters such as e, k, g, s, we have
string as "geksfor".

Example 2:

Input:
Str = HappyNewYear
Output: HapyNewYr

Explanation: After removing duplicate
characters such as p, e, a, we have
string as "HapyNewYr".

Your Task:
Complete the function removeDuplicates() which takes a string str, as input parameters and returns a string denoting the answer. You don't to print answer or take inputs.
*/
let str = "geeksforgeeks";
const m = new Map();
let j = 0;
for(let i=0; i<str.length; i++){
    if(!m.has(str[i])){
        str = str.slice(0, j) + str[i] + str.slice(j+1);
        j++;
        m.set(str[i], 1);
    }
}
console.log(str.substr(0,j));
/*
class Solution {
    removeDuplicates(str){
       //code here
       const m = new Map();
let j = 0;
for(let i=0; i<str.length; i++){
    if(!m.has(str[i])){
        str = str.slice(0, j) + str[i] + str.slice(j+1);
        j++;
        m.set(str[i], 1);
    }
}
return str.substr(0,j);


    }
}
*/
