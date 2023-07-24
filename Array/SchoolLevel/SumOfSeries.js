/*
Write a program to find the sum of the given series 1+2+3+ . . . . . .(N terms) 

Example 1:

Input:
N = 1 
Output: 1
Explanation: For n = 1, sum will be 1.

Example 2:

Input:
N = 5 
Output: 15

Explanation: For n = 5, sum will be 1 + 2 + 3 + 4 + 5 = 15.

Your Task:
Complete the function seriesSum() which takes single integer n, as input parameters and returns an integer denoting the answer. You don't need to print the answer or take inputs.
*/

/* // 30300/100100 test passed.
let n = 7;
let sum = 0;
for(let i=1;i<=n;i++){
    sum = sum+i;
}
console.log(sum);

*/
let n = 13;
let sum = n*(2+n-1)/2;
console.log(sum)
/*

*/