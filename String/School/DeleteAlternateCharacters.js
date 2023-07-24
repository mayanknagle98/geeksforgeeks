/*
Given a string S as input. Delete the characters at odd indices of the string.

Example 1:

Input: S = "Geeks"
Output: "Ges" 
Explanation: Deleted "e" at index 1
and "k" at index 3.

Example 2:

Input: S = "GeeksforGeeks"
Output: "GesoGes"
Explanation: Deleted e, k, f, r, e
k at index 1, 3, 5, 7, 9, 11.

Your Task:  
You dont need to read input or print anything. Complete the function delAlternate() which takes S as input parameter and returns the final string after deletion of characters at odd indices.

*/
let str = "Geeks";
let s = "";
for(let i=0;i<str.length;i=i+2){
    s=s+str[i];
}
console.log(s);

/*
class Solution{
    delAlternate(S){
        //code here
        let str = "";
        for(let i=0;i<S.length;i=i+2){
            str=str+S[i];
        }
        return str;
    }
}
*/