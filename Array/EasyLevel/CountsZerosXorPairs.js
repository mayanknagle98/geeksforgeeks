/*
Given an array A[] of size N. Find the number of pairs (i, j) such that
Ai XOR Aj = 0, and 1 ≤ i < j ≤ N.

Example 1:

â€‹Input : arr[ ] = {1, 3, 4, 1, 4}
Output : 2

Explanation:
Index( 0, 3 ) and (2 , 4 ) are only pairs 
whose xors is zero so count is 2.

â€‹Example 2:

Input : arr[ ] = {2, 2, 2} 
Output :  3

Your Task:
This is a function problem. The input is already taken care of by the driver code. You only need to complete the function calculate() that takes an array (arr), sizeOfArray (n), and return the count of Zeros Xor's Pairs. The driver code takes care of the printing.
*/
let arr = [1, 3, 4, 1, 4];
let n = 5;
arr.sort();
let ans = 0;
for(let i=0,j=0; i<n-1; i=j){
    while(arr[j] == arr[i]) j++;
    let ele = j-i;
    ans += (ele*(ele-1))/2;
}
console.log(ans);
/*
class Solution {
    calculate(arr, n) {
        //code here
        arr.sort();
let ans = 0;
for(let i=0,j=0; i<n-1; i=j){
    while(arr[j] == arr[i]) j++;
    let ele = j-i;
    ans += (ele*(ele-1))/2;
}
return ans;
    }
}
*/