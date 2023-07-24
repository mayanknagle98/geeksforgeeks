/*  GOLDMAN SACHS
====================
Given an array arr[] of n numbers. The task is to print only those numbers whose digits are from set {1,2,3}.

Example 1:

Input:
n = 3
arr[] = {4,6,7}
Output: -1

Explanation: No elements are there in the 
array which contains digits 1, 2 or 3.

Example 2:

Input:
n = 4
arr[] = {1,2,3,4}
Output: 1 2 3

Explanation: 1, 2 and 3 are the only 
elements in the array which conatins 
digits as 1, 2 or 3.

Your Task:
Complete findAll function and marked satisfied number as '1' in the map mp in range 1 to 1000000. If no number is marked as satified number -1 will automatically be printed by the drivers code. The driver code prints the elements in sorted order.
*/

// let arr = [1,2,3];
// let n = 3;
// let ans = [];
// for(let i=0;i<n;i++){
//     if(arr[i]==1||arr[i]==2||arr[i]==3){
//         ans.push(arr[i]);
//     }
//     else{
//         console.log(-1);
//     }
// }
// for(let i=0;i<n;i++){
//     arr[i]=ans[i];
// }
// console.log(arr);

/*
function isValid(n){
     while(n !== 0) {
         if(n % 10 !== 1 && n % 10 !== 2 && n % 10 !== 3){
            return false;
        }
        n = Math.floor(n / 10);
    }
    return true;
}
class Solution {
    //Function to find all the numbers with only 1,2 and 3 in their digits.
    findAll()
    {
        //your code here
        for(let i = 1; i < 1e6 + 1; i++){
        if(isValid(i))
            mp.set(i, 1);
    }
    }
}
*/