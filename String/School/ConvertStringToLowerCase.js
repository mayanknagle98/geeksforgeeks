/*
Given a string S. The task is to convert characters of string to lowercase.

Example 1:

Input: S = "ABCddE"
Output: "abcdde"

Explanation: A, B, C and E are converted to
a, b, c and E thus all uppercase characters 
of the string converted to lowercase letter.

Example 2:

Input: S = "LMNOppQQ"
Output: "lmnoppqq"

Explanation: L, M, N, O, and Q are 
converted to l, m, n, o and q thus 
all uppercase characters of the 
string converted to lowercase letter.

Your Task:  
You dont need to read input or print anything. Complete the function toLower() which takes S as input parameter and returns the converted string.
*/
let str = "ABCddE";
let n = str.length;
function toLowerCase(str,n){
    let str1 = "";
    for(let i=0;i<n;i++){
        let code = str.charCodeAt(i);
        if(code>=65&&code<=90){
            str1+=String.fromCharCode(code+32);
        }
        else{
            str1+=str[i]
        }
    }
    return str1;
}
console.log(toLowerCase(str,n));

/*
class Solution{
    toLower(arr,n){
        //code here
        let str = arr.toLowerCase();
        return str
    }
}
*/