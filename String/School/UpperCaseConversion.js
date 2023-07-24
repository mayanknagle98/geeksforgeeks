/* Naggaro
============
Given a string str, convert the first letter of each word in the string to uppercase. 

Example 1:

Input:
str = "i love programming"
Output: "I Love Programming"

Explanation:
'I', 'L', 'P' are the first letters of 
the three words.

Your Task:  
You dont need to read input or print anything. Complete the function transform() which takes s as input parameter and returns the transformed string.
*/
let s = "i love programming";
s = s.charAt(0).toUpperCase() + s.slice(1);
for (let i = 1; i < s.length; i++) {
    if (s[i] === ' ') {
        s = s.slice(0, i + 1) + s.charAt(i + 1).toUpperCase() + s.slice(i + 2);
    }
}
console.log(s);

/*
class Solution{
    transform(s){
        //code here
        s=s.charAt(0).toUpperCase()+s.slice(1);
        for(let i=1;i<s.length;i++){
            if(s[i]===" "){
                s=s.slice(0,i+1)+s.charAt(i+1).toUpperCase()+s.slice(i+2);
            }
        }
        return s;
    }
}
*/