/* AMAZON
============
Given two sorted arrays A and B of size M and N respectively. Each array may have some elements in common with the other array. Find the maximum sum of a path from the beginning of any array to the end of any of the two arrays. We can switch from one array to another array only at the common elements.Both the arrays are sorted.
Note: Only one repeated value is considered in the valid path sum.

Example 1:

Input:
M = 5, N = 4
A[] = {2,3,7,10,12}
B[] = {1,5,7,8}
Output: 35

Explanation: The path will be 1+5+7+10+12
= 35.

Example 2:

Input:
M = 3, N = 3
A[] = {1,2,3}
B[] = {3,4,5}
Output: 15

Explanation: The path will be 1+2+3+4+5=15.

Your Task:
You don't need to read input or print anything. Complete the function max_path_sum() which takes the two arrays A and B along with their sizes M and N as input parameters. It returns the maximum path sum.
*/
let a = [2,3,7,10,12];
let b = [1,5,7,8];
let m = 5, n = 4;
let i = 0, j = 0;
let res = 0, sum1 = 0, sum2 = 0;
while (i < m && j < n) {
    if (a[i] < b[j]) {
        sum1 += a[i++];
    } else if (a[i] > b[j]) {
        sum2 += b[j++];
    } else {
        res += Math.max(sum1, sum2) + a[i];
        sum1 = sum2 = 0;
        i++;
        j++;
    }
}
while (i < m) {
    sum1 += a[i++];
}
while (j < n) {
    sum2 += b[j++];
}
res += Math.max(sum1, sum2);
console.log(res);
/*
class Solution {
    max_path_sum(a, b, M, N)
    {
        //your code here
        let i = 0, j = 0;
const m = a.length, n = b.length;
let res = 0, sum1 = 0, sum2 = 0;
while (i < m && j < n) {
    if (a[i] < b[j]) {
        sum1 += a[i++];
    } else if (a[i] > b[j]) {
        sum2 += b[j++];
    } else {
        res += Math.max(sum1, sum2) + a[i];
        sum1 = sum2 = 0;
        i++;
        j++;
    }
}
while (i < m) {
    sum1 += a[i++];
}
while (j < n) {
    sum2 += b[j++];
}
res += Math.max(sum1, sum2);
return res;
    }
}
*/