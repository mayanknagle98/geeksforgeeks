/* PAYTM, ACCOLITE, AMAZON, MAKEMYTRIP, LINKEDIN
===================================================
Given an array Arr[], write a program that segregates even and odd numbers. The program should put all even numbers first in sorted order, and then odd numbers in sorted order.

Note :- You don't have to return the array, you just have to modify it in-place.

Example 1:

Input: 
N = 7
Arr[] = {12, 34, 45, 9, 8, 90, 3}
Output: 8 12 34 90 3 9 45

Explanation: Even numbers are 12, 34,
8 and 90. Rest are odd numbers. After
sorting even numbers 8 12 34 90 and 
after sorting odd numbers 3 9 45. Then
concat both.

Example 2:

Input: 
N = 5
Arr[] = {0, 1, 2, 3, 4}
Output: 0 2 4 1 3

Explanation: 0 2 4 are even and 1 3
are odd numbers.

Your Task:  
You don't need to read input or print anything. Your task is to complete the function segregateEvenOdd() which takes the array of integers arr[] and n as parameters and returns void. You need to modify the array itself.
*/
let arr = [12, 34, 45, 9, 8, 90, 3];
let n = 7;
arr.sort((a, b) => a - b);
const v = [];
for(let i = 0; i < n; i++) {
  if(arr[i] % 2 === 0) {
    v.push(arr[i]);
  }
}
for(let i = 0; i < n; i++) {
  if(arr[i] % 2 !== 0) {
    v.push(arr[i]);
  }
}
for(let i = 0; i < n; i++) {
  arr[i] = v[i];
}
console.log(arr)