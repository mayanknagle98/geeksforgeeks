/*
Given a string. Count the number of Camel Case characters in it.

Example 1:

Input:
S = "ckjkUUYII"
Output: 5

Explanation: Camel Case characters present:
U, U, Y, I and I.

â€‹Example 2:

Input: 
S = "abcd"
Output: 0

Explanation: No Camel Case character
present.

Your Task:
You don't need to read input or print anything. Your task is to complete the function countCamelCase() which takes the string S as input and returns the count of the camel case characters in the string.
*/
let str = "abcd";
let n = str.length;
function countCamelCase(str,n){
    let count = 0;
    for(let i=0;i<n;i++){
        if(str[i]>="A"&&str[i]<="Z"){
            count++;
        }
    }
    return count;
}
console.log(countCamelCase(str,n));

/*
class Solution{
    countCamelCase(s){
        //code here
       let s1 = 0;
for (let i = 0; i < s.length; i++) {
    if (s[i] >= 'A' && s[i] <= 'Z') {
        s1++;
    }
}
return s1;
    }
}
*/