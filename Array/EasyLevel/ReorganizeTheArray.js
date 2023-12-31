/*
Given an array of elements of length N, ranging from 0 to N-1, your task is to write a program that rearranges the elements of the array. All elements may not be present in the array, if the element is not present then there will be -1 present in the array. Rearrange the array such that A[i] = i and if i is not present, display -1 at that place.

Example 1:

Input : A[] = {-1, -1, 6, 1, 9, 3, 2, -1, 4, -1}
Output : -1 1 2 3 4 -1 6 -1 -1 9

Explanation:
Here We can see there are 10 elements. So, the sorted array
will look like {0, 1, 2, 3, 4, 5, 6, 7, 8, 9} but in our
array we are not having 0, 5, 7 and 8. So, at there places
we will be printing -1 and otherplaces will be having elements.

Example 2:

Input : A[] = {2, 0, 1} 
Output : 0 1 2
 
Your Task:
This is a function problem. The input is already taken care of by the driver code. You only need to complete the function Rearrange() that takes an array (arr), sizeOfArray (n), and return the array after rearranging it. The driver code takes care of the printing.
*/
let arr = [-1, -1, 6, 1, 9, 3, 2, -1, 4, -1];
let n = 10;
const v = new Array(n).fill(-1);
arr.sort((a, b) => a - b);
for (let i = 0; i < n; i++) {
  if (arr[i] >= 0) {
    v[arr[i]] = arr[i];
  }
}
for (let i = 0; i < n; i++) {
  arr[i] = v[i];
}
console.log(arr);

/*
class Solution{
    Rearrange(arr,n){
       const v = new Array(n).fill(-1);
arr.sort((a, b) => a - b);
for (let i = 0; i < n; i++) {
  if (arr[i] >= 0) {
    v[arr[i]] = arr[i];
  }
}
for (let i = 0; i < n; i++) {
  arr[i] = v[i];
}
return arr;
    }
}
*/