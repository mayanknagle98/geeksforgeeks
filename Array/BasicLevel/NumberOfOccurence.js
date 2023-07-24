/* Zoho, Amazon, MakeMyTrip
===========================
Given a sorted array Arr of size N and a number X, you need to find the number of occurrences of X in Arr.

Example 1:

Input:
N = 7, X = 2
Arr[] = {1, 1, 2, 2, 2, 2, 3}
Output: 4

Explanation: 2 occurs 4 times in the
given array.
Example 2:

Input:
N = 7, X = 4
Arr[] = {1, 1, 2, 2, 2, 2, 3}
Output: 0

Explanation: 4 is not present in the
given array.

Your Task:
You don't need to read input or print anything. Your task is to complete the function count() which takes the array of integers arr, n, and x as parameters and returns an integer denoting the answer.
If x is not present in the array (arr) then return 0.
*/
let arr = [1, 1, 2, 2, 2, 2, 3];
let n = 7;
let x = 4;
let count = 0;
for(let i=0;i<n;i++){
    if(arr[i]==x){
        count++;
    }
}
console.log(count);

/*
class Solution {
    count(arr,n,x){
        //code here
        let count=0;
        for(let i=0;i<n;i++){
            if(arr[i]==x){
                count++;
            }
        }
        return count;
    }
}
*/