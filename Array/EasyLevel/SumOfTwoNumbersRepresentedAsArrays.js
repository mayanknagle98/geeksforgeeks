/*  ZOHO, ACCOLITE, AMAZON
=============================
Given two numbers represented by two different arrays A and B. The task is to find the sum array. The sum array is an array representation of addition of two input arrays.

Example 1:

Input:
N = 3, M = 3
A[] = {5, 6, 3}
B[] = {8, 4, 2}
Output: 1 4 0 5

Explanation: As 563 + 842 = 1405.

Example 2:

Input:
N = 6, M = 4 
A[] = {2, 2, 7, 5, 3, 3}
B[] = {4, 3, 3, 8}
Output: 2 3 1 8 7 1

Explanation: As 227533 + 4338 = 231871.

Your Task:  
You don't need to read input or print anything. Your task is to complete the function findSum() which takes the array(vector) of integers a and b as parameters and returns an array denoting the answer.
*/
let a = [5, 6, 3];
let b = [8, 4, 2];
let ans = [];
let n = a.length - 1, m = b.length - 1, carry = 0;
while (n >= 0 && m >= 0) {
  let sum = a[n--] + b[m--] + carry;
  carry = Math.floor(sum / 10);
  sum = sum % 10;
  ans.push(sum);
}
while (n >= 0) {
  let sum = a[n--] + carry;
  carry = Math.floor(sum / 10);
  sum = sum % 10;
  ans.push(sum);
}
while (m >= 0) {
  let sum = b[m--] + carry;
  carry = Math.floor(sum / 10);
  sum = sum % 10;
  ans.push(sum);
}
while (carry !== 0) {
  let sum = carry;
  carry = Math.floor(sum / 10);
  sum = sum % 10;
  ans.push(sum);
}
ans.reverse();
console.log(ans)
