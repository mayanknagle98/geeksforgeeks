/* AMAZON
===========
Given an array consisting of only prime numbers, remove all duplicate numbers from it. 

Example 1:

Input:
N = 6
A[] = {2,2,3,3,7,5}
Output: 2 3 7 5

Explanation: After removing the duplicate
2 and 3 we get 2 3 7 5.

Your Task:
Complete the function removeDuplicate() that takes the array of integers and N as input parameters and returns the modified array which has no duplicates. Retain only the first occurrence of the duplicate element. The elements in the returning array should be in the same order as they appear in the original array.
*/
let arr = [2,2,3,3,7,5];
let n = 6;
let result = [];
for(let i=0;i<n;i++){
    if(result.indexOf(arr[i])===-1){
        result.push(arr[i]);
    }
}
console.log(result)