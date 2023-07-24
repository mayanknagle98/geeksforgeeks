/* PAYTM, AMAZON
==================
You are given an array A, of N elements. Find minimum index based distance between two elements of the array, x and y such that (x!=y).

Example 1:

Input:
N = 4
A[] = {1,2,3,2}
x = 1, y = 2
Output: 1

Explanation: x = 1 and y = 2. There are
two distances between x and y, which are
1 and 3 out of which the least is 1.

Example 2:

Input:
N = 7
A[] = {86,39,90,67,84,66,62}
x = 42, y = 12
Output: -1

Explanation: x = 42 and y = 12. We return
-1 as x and y don't exist in the array.

Your Task:
Complete the function minDist() which takes the array, n, x and y as input parameters and returns the minimum distance between x and y in the array. If no such distance is possible then return -1.
*/
let a = [1,2,3,2];
let n = 4;
let x = 1, y = 2;
let ans = Number.MAX_SAFE_INTEGER;
let a1 = -1;
let b1 = -1;
for(let i=0; i<n; i++) {
    if(a[i] === x) {
        a1 = i;
    }
    if(a[i] === y) {
        b1 = i;
    }
    if(a1 !== -1 && b1 !== -1) {
        ans = Math.min(ans, Math.abs(a1-b1));
    }
}
if(ans === Number.MAX_SAFE_INTEGER || ans === 0) {
    console.log(-1);
} else {
    console.log(ans);
}

/*
class Solution {
  
    minDist(a, n, x, y)
    {
        // code here
    
        let ans = Number.MAX_SAFE_INTEGER;
let a1 = -1;
let b1 = -1;
for(let i=0; i<n; i++) {
    if(a[i] === x) {
        a1 = i;
    }
    if(a[i] === y) {
        b1 = i;
    }
    if(a1 !== -1 && b1 !== -1) {
        ans = Math.min(ans, Math.abs(a1-b1));
    }
}
if(ans === Number.MAX_SAFE_INTEGER || ans === 0) {
    return -1;
} else {
    return ans;
}

    }
}
*/