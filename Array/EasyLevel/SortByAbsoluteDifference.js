/*
Given an array of N elements and a number K. The task is to arrange array elements according to the absolute difference with K, i. e., element having minimum difference comes first and so on.
Note : If two or more elements are at equal distance arrange them in same sequence as in the given array.
 
Example 1:

Input: N = 5, K = 7
arr[] = {10, 5, 3, 9, 2}
Output: 5 9 10 3 2

Explanation: Sorting the numbers accoding to 
the absolute difference with 7, we have 
array elements as 5, 9, 10, 3, 2.

Example 2:

Input: N = 5, K = 6
arr[] = {1, 2, 3, 4, 5}
Output: 5 4 3 2 1

Explanation: Sorting the numbers according to 
the absolute difference with 6, we have array 
elements as 5 4 3 2 1.

Your Task:
This is a functional problem. You only need to complete the function sortABS(). The printing is done automatically by the driver code.
*/
let arr = [10, 5, 3, 9, 2];
let n = 5;
let k = 7;
let v = [];
for(let i=0; i<n; i++){
    v.push([Math.abs(arr[i]-k), i]); //3 2 4 2 5
}
v.sort((a, b) => a[0] - b[0]); // 2 2 3 4 5
let temp = [];
for(let i=0; i<n; i++){
    temp[i] = arr[v[i][1]];
}
for(let i=0; i<n; i++){
    arr[i] = temp[i];
}
console.log(arr);

/*
class Solution {
    //Function to sort the array according to difference with given number.
    sortABS(arr, N, K)
    {
        //your code here
        let v = [];
for(let i=0; i<N; i++){
    v.push([Math.abs(arr[i]-K), i]);
}
v.sort((a, b) => a[0] - b[0]);
let temp = [];
for(let i=0; i<N; i++){
    temp[i] = arr[v[i][1]];
}
for(let i=0; i<N; i++){
    arr[i] = temp[i];
}
return arr;
    }
}
*/

