/* AMAZON
============
Given a sorted array arr containing n elements with possibly duplicate elements, the task is to find indexes of first and last occurrences of an element x in the given array.

Example 1:

Input:
n=9, x=5
arr[] = { 1, 3, 5, 5, 5, 5, 67, 123, 125 }
Output:  2 5
Explanation: First occurrence of 5 is at index 2 and last
occurrence of 5 is at index 5. 
 
Example 2:

Input:
n=9, x=7
arr[] = { 1, 3, 5, 5, 5, 5, 7, 123, 125 }
Output:  6 6

Your Task:
Since, this is a function problem. You don't need to take any input, as it is already accomplished by the driver code. You just need to complete the function find() that takes array arr, integer n and integer x as parameters and returns the required answer.
Note: If the number x is not found in the array just return both index as -1.
*/
let arr = [1, 3, 5, 5, 5, 5, 67, 123, 125];
let n= 9;
let x = 5;
let vec = [];
let low = 0, high = n - 1;
while(low <= high) {
    if(arr[low] !== x) low++;
    if(arr[high] !== x) high--;
    if(arr[low] === x && arr[high] === x) {
        vec.push(low);
        vec.push(high);
        break;
    }
}
if(low > high) {
    vec.push(-1);
    vec.push(-1);
}
console.log(vec);

/*
class Solution {
    find(arr,n,x){
       //code here
       let vec = [];
let low = 0, high = n - 1;
while(low <= high) {
    if(arr[low] !== x) low++;
    if(arr[high] !== x) high--;
    if(arr[low] === x && arr[high] === x) {
        vec.push(low);
        vec.push(high);
        break;
    }
}
if(low > high) {
    vec.push(-1);
    vec.push(-1);
}
return vec;

    }
}
*/
