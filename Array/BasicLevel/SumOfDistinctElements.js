/*
You are given an array Arr of size N. Find the sum of distinct elements in an array.

Example 1:

Input:
N = 5
Arr[] = {1, 2, 3, 4, 5}
Output: 15

Explanation: Distinct elements are 1, 2, 3
4, 5. So sum is 15.

Example 2:

Input:
N = 5
Arr[] = {5, 5, 5, 5, 5}
Output: 5

Explanation: Only Distinct element is 5.
So sum is 5.

Your Task:
You don't need to read input or print anything. Your task is to complete the function findSum() which takes the array of integers arr and n as parameters and returns an integer denoting the answer.
*/
let arr = [1,2,3,4,5];
let n = 5;
let sum=0;
for(let i=0;i<n;i++){
    if(i===arr.lastIndexOf(arr[i])){
        sum = sum+arr[i];
    }
    continue;
}
console.log(sum);

/*
let arr = [1,2,3,4,5];
let n = 5;
const s = new Set(arr);
console.log(Array.from(s).reduce((acc, val) => acc + val, 0));
*/

/*
class Solution {
  findSum(arr, n) {
    //code here
   const s = new Set(arr);
return Array.from(s).reduce((acc, val) => acc + val, 0);

  }
}
*/