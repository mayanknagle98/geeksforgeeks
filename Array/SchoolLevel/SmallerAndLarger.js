/*
Given a sorted array Arr of size N and a value X, find the number of array elements less than or equal to X and elements more than or equal to X. 

Example 1:

Input:
N = 7, X = 0
Arr[] = {1, 2, 8, 10, 11, 12, 19}
Output: 0 7

Explanation: There are no elements less or
equal to 0 and 7 elements greater or equal
to 0.

Example 2:

Input:
N = 7, X = 5
Arr[] = {1, 2, 8, 10, 11, 12, 19}
Output: 2 5

Explanation: There are 2 elements less or
equal to 5 and 5 elements greater or equal
to 5.

Your Task:
You don't need to read input or print anything. Your task is to complete the function getMoreAndLess() which takes the array of integers arr, n and x as parameters and returns an array of size 2. pair denoting the answer. The first value is number of elements less than or equal to x and the second value is number of elements more than or equal to x.
*/

// let arr = [1, 2, 8, 10, 11, 12, 19];
// let n = 7;
// let x = 0;
// let count1 = 0;
// let count2 = 0;

// for(let i=0;i<n;i++){
//     if(arr[i]<=x){
//         count1++;
//     }
//     else if(arr[i]>=x){
//         count2++;
//     }
// }
// console.log(count1)
// console.log(count2)

/*

class Solution{
    getMoreAndLess(arr,n, x){
        //code here
           let ans = [0,0]
           for(let i = 0; i<arr.length;i++){
            if(arr[i]==x){
            ans[0]++;
                ans[1]++;
            }
            else if(arr[i]<x){
                ans[0]++;
            }
            else{
                ans[1]++;
            }
        }
        return (ans)
    }
}

*/
let arr = [1, 2, 8, 10, 11, 12, 19];
let x = 5;
let ans = [0,0];
for(let i=0;i<arr.length;i++){
    if(arr[i]==x){
        ans[0]++;
        ans[1]++;
    }
    else if(arr[i]<x){
        ans[0]++;
    }
    else{
        ans[1]++;
    }
}
console.log(ans[0])
console.log(ans[1])