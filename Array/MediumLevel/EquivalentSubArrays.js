/*
Given an array arr[] of n integers. Count the total number of sub-array having total distinct elements same as that of total distinct elements of the original array.

Example 1:

Input:
N=5
arr[] = {2, 1, 3, 2, 3} 
Output: 5

Explanation:
Total distinct elements in array is 3
Total sub-arrays that satisfy the condition
are:
Subarray from index 0 to 2
Subarray from index 0 to 3
Subarray from index 0 to 4
Subarray from index 1 to 3
Subarray from index 1 to 4

Example 2:

Input:
N=5
arr[] = {2, 4, 4, 2, 4} 
Output: 9

Your Task:
Since, this is a function problem. You don't need to take any input, as it is already accomplished by the driver code. You just need to complete the function countDistinctSubarray() that takes array arr and integer n  as parameters and returns the desired result.
*/
let arr = [2, 4, 4, 2, 4];
let n = 5;
const map = new Map();
const cmap = new Map();
for(let i=0; i<n; ++i) {
    map.set(arr[i], (map.get(arr[i]) || 0) + 1);
}
let cnt = 0, j = 0;
const len = map.size;
for(let i=0; i<n; ++i) {
    cmap.set(arr[i], (cmap.get(arr[i]) || 0) + 1);
    while(len === cmap.size) {
        cmap.set(arr[j], cmap.get(arr[j]) - 1);
        if(cmap.get(arr[j]) === 0) cmap.delete(arr[j]);
        j++;
        cnt = cnt + n - i;
    }
}
console.log(cnt);

/*
countDistinctSubarray(n, arr) {
        // code here
       const map = new Map();
const cmap = new Map();
for(let i=0; i<n; ++i) {
    map.set(arr[i], (map.get(arr[i]) || 0) + 1);
}
let cnt = 0, j = 0;
const len = map.size;
for(let i=0; i<n; ++i) {
    cmap.set(arr[i], (cmap.get(arr[i]) || 0) + 1);
    while(len === cmap.size) {
        cmap.set(arr[j], cmap.get(arr[j]) - 1);
        if(cmap.get(arr[j]) === 0) cmap.delete(arr[j]);
        j++;
        cnt = cnt + n - i;
    }
}
return cnt;
    }
}
*/