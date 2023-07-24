/* INMOBI
===========
Given a string S consisting only '0's and '1's,  find the last index of the '1' present in it.

Example 1:

Input:
S = 00001
Output:
4

Explanation:
Last index of  1 in given string is 4. 

Example 2:

Input:
0
Output:
-1

Explanation:
Since, 1 is not present, so output is -1.
 
Your Task:  
You don't need to read input or print anything. Your task is to complete the function lastIndex() which takes the string S as inputs and returns the last index of '1'. If '1' is not present, return "-1" (without quotes).
*/

let str = "0000";
let index = -1;
for(let i=0; i<str.length; i++){
    if(str.charAt(i) == '1'){
        index = i;
    }
}
console.log(index);
/*
class Solution{
    lastIndex(S){
        //code here
        let index = -1;
        for(let i=0;i<S.length;i++){
            if(S.charAt(i)==1){
                index=i;
            }
        }
        return index;
    }
}
*/