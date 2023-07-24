/* AMAZON, SNAPDEAL
=====================
Given an array of N positive integers where all numbers occur even number of times except one number which occurs odd number of times. Find the exceptional number.

Example 1:

Input:
N = 7
Arr[] = {1, 2, 3, 2, 3, 1, 3}
Output: 3

Explaination: 3 occurs three times.

Example 2:

Input:
N = 7
Arr[] = {5, 7, 2, 7, 5, 2, 5}
Output: 5

Explaination: 5 occurs three times.

Your Task:
You don't need to read input or print anything. Your task is to complete the function getOddOccurrence() which takes arr[] and n as input parameters and returns the exceptional number.
*/
let arr = [5, 7, 2, 7, 5, 2, 5];
let n = 7;
let ans=0;
for(let i=0;i<n;i++){
   ans = ans ^ arr[i];
}
console.log(ans);

/* ^ => xor
------------
a b o
-----
0 0 0
0 1 1
1 0 1
1 1 0

class Solution{
    getOddOccurrence(arr,n){
        //code here
        let ans = 0;
        for(let i=0;i<n;i++){
            ans = ans ^ arr[i];
        }
        return ans;
    }
}

*/