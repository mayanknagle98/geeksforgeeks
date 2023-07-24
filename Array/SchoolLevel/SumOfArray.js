/*  Given an integer array Arr[] of size N. The task is to find sum of it.

Example 1:

Input:
N = 4
Arr[] = {1, 2, 3, 4}
Output: 10
Explanation: 1 + 2 + 3 + 4 = 10.

Your Task:
Complete the function sum() which takes array arr and single integer n, as input parameters and returns an integer denoting the answer. You don't to print answer or take inputs.

*/

let arr = [10,12,14,6,5];
let n = 5;
let sum = 0;
for(let i=0;i<n;i++){
    sum = sum+arr[i];
}
document.write(sum);

// class Solution {
//     sum(arr,n) {
//         // code here
//         arr = [1,2,3,4];
//         n = 4;
//         let add=0;
//         for(let i=0;i<n;i++){
//             add=add+arr[i];
//         }
//            return add;
//     }
// }