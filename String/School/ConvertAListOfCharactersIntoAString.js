/*
Given a list of characters, merge all of them into a string.

Example 1:

Input:
N = 13
Char array = g e e k s f o r g e e k s
Output: geeksforgeeks 

Explanation: combined all the characters
to form a single string.

Example 2:

Input:
N = 4
Char array = e e b a
Output: eeba

Explanation: combined all the characters
to form a single string.

Your Task:
You dont need to read input or print anything. Complete the function chartostr() which accepts a char array arr and its size  N  as parameter and returns a string.
*/
let arr = ["g", "e", "e", "k", "s", "f", "o", "r", "g", "e", "e", "k", "s"];
let n = 13;
// let ans = arr.join("")
// console.log(ans)

let str = "";
for(let i=0; i<n; i++) {
    str = str+arr[i];
}
console.log(str);

/*
by method
-----------
class Solution{
    chartostr(arr,n){
        //code here
    let ans = arr.join("")
    return ans;
    }
}

by looping
-------------
class Solution{
    chartostr(arr,n){
        //code here
       let str = "";
for(let i=0; i<n; i++) {
    str = str+arr[i];
}
    return str;
    }
}
*/