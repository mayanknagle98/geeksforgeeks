/*
Given a String S , print the reverse of the string as output.

Example 1:

Input: S = "GeeksforGeeks"
Output: "skeeGrofskeeG" 
Explanation: Element at first is at last and
last is at first, second is at second last and 
second last is at second position and so on.

Example 2:

Input: S = "ReversE"
Output: "EsreveR"
Explanation: "E" at first and "R" at last and
"e" at second last and "s" at second and
so on .

Your Task:  
You dont need to read input or print anything. Complete the function revStr() which takes S as input parameter and returns the reversed string .
*/
// by split reverse and join

// let str = "GeeksforGeeks";
// let rev = str.split("").reverse().join("")
// console.log(rev)

// by reverse loop

let str = "GeeksforGeeks";
let ans = "";
for(let i=str.length-1;i>=0;i--){
    ans = ans+str[i]
}
console.log(ans)

// class Solution {
//     revStr(s){
//        //code here
//        let ans = "";
//  for(let i=s.length-1;i>=0;i--){
//      ans = ans+s[i]
//  }
// return ans;
//     }
// }