/*
Given an integer array and another integer element. The task is to find if the given element is present in array or not.

Example 1:

Input:
n = 4
arr[] = {1,2,3,4}
x = 3
Output: 2

Explanation: There is one test case 
with array as {1, 2, 3 4} and element 
to be searched as 3.  Since 3 is 
present at index 2, output is 2.

Example 2:

Input:
n = 5
arr[] = {1,2,3,4,5}
x = 5
Output: 4

Explanation: For array elements 
{1,2,3,4,5} element to be searched 
is 5 and it is at index 4. So, the 
output is 4.

Your Task:
The task is to complete the function search() which takes the array arr[], its size N and the element X as inputs and returns the index of first occurrence of X in the given array. If the element X does not exist in the array, the function should return -1.
*/
let arr = [1,2,3,4];
let n = 4;
let x = 3;
for(let i=0;i<n;i++){
    if(arr[i]==x){
        console.log(i);
    }
}
console.log(-1);

/*
class Solution {
    search(arr, N, X) {
        // write your code here
        for(let i=0;i<N;i++){
            if(arr[i]==X){
                return i;
            }
        }
        return -1;
    }
}
*/