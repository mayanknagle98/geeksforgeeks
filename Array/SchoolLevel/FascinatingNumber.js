/* WHAT IS FASCINATING NUMBER
   --------------------------
Fascinating Number: When a number( 3 digits or more ) is multiplied by 2 and 3, and when both these products are concatenated with the original number, then it results in all digits from 1 to 9 present exactly once. There could be any number of zeros and are ignored. 

Input: 192 
Output: Yes 
After multiplication with 2 and 3, and concatenating with original number, resultant number is 192384576 which contains all digits from 1 to 9.

Input: 853 
Output: No 
After multiplication with 2 and 3, and concatenating with original number, the resultant number is 85317062559. In this, number 4 is missing and the number 5 has appeared multiple times.

QUESTION
--------

Given a number N. Your task is to check whether it is fascinating or not.
Fascinating Number: When a number(should contain 3 digits or more) is multiplied by 2 and 3, and when both these products are concatenated with the original number, then it results in all digits from 1 to 9 present exactly once.

Example 1:

Input: 
N = 192
Output: Fascinating

192, 192X2=384, 192X3=576 and their concatenation become 192384576.

Explanation: After multiplication with 2
and 3, and concatenating with original
number, number will become 192384576 
which contains all digits from 1 to 9.

Example 2:

Input: 
N = 853
Output: Not Fascinating

853, 853X2=1706, 853X3=2559 and their concatenation become 85317062559.

Explanation: It's not a fascinating
number.

Your Task:  
You don't need to read input or print anything. Your task is to complete the function fascinating() which takes the integer n parameters and returns boolean(True or False) denoting the answer.

*/
let n= 192;
let ans = n.toString();
ans += (n*2).toString();
ans += (n*3).toString();
let arr = new Array(9).fill(0);

function fascinating(ans, arr){
    for(let i=0;i<ans.length;i++){
        arr[parseInt(ans[i])-1]++;
    }
    for(let i=0;i<9;i++){
        if(arr[i]!=1){
            console.log("false");
        }
    }
    console.log("true");    
}
fascinating(ans, arr);

/*
class Solution {
    fascinating(N){
       //code here
      let ans = N.toString();
      ans += (N*2).toString();
      ans += (N*3).toString();
      let arr = new Array(9).fill(0);
      
      for(let i=0;i<ans.length;i++){
        arr[parseInt(ans[i])-1]++;
      }
      for(let i=0;i<9;i++){
          if(arr[i]!=1){
              return false;
          }
      }
      return true;
    }
}

*/

