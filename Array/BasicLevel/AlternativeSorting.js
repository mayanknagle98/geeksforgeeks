/* ZOHO
=========
Given an array arr[] of N distinct integers, output the array in such a way that the first element is first maximum and the second element is the first minimum, and so on.

Example 1:

Input: N = 7, arr[] = {7, 1, 2, 3, 4, 5, 6}
Output: 7 1 6 2 5 3 4

Explanation:The first element is first 
maximum and second element is first 
minimum and so on.

Example 2:

Input: N = 8, arr[] = {1, 6, 9, 4, 3, 7, 8, 2}
Output: 9 1 8 2 7 3 6 4

Your Task:
This is a function problem. You don't need to take any input, as it is already accomplished by the driver code. You just need to complete the function alternateSort() that takes array arr and integer N as parameters and returns the desired array as output.
*/

let arr = [7, 1, 2, 3, 4, 5, 6];
let n = 7;
arr.sort((a,b)=>a-b); // 1234567
let i=0;j=n-1;
let v = [];
while(i<j){
    v.push(arr[j--]);
    v.push(arr[i++]);
}if(i==j){
    v.push(arr[j--]);
}
console.log(v);

/*
class Solution {
    alternateSort(arr,n){
       //code here
      arr.sort((a, b) => a - b);
        let i = 0;
        let j = n - 1;
        let v = [];
        while(i < j){
            v.push(arr[j--]);
            v.push(arr[i++]);
        }
        if(i == j)
            v.push(arr[j--]);
        return v;
    }
}
*/
