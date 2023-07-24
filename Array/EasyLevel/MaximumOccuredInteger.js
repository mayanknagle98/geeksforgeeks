/*
Given n integer ranges, the task is to find the maximum occurring integer in these ranges. If more than one such integer exists, find the smallest one. The ranges are given as two arrays L[] and R[].  L[i] consists of starting point of range and R[i] consists of corresponding end point of the range.

For example consider the following ranges.
L[] = {2, 1, 3}, R[] = {5, 3, 9)
Ranges represented by above arrays are.
[2, 5] = {2, 3, 4, 5}
[1, 3] = {1, 2, 3}
[3, 9] = {3, 4, 5, 6, 7, 8, 9}
The maximum occurred integer in these ranges is 3.

Example 1:

Input:
n = 4
L[] = {1,4,3,1}
R[] = {15,8,5,4}
Output: 4

Explanation: The given ranges are [1,15]
[4, 8] [3, 5] [1, 4]. The number that 
is most common or appears most times in 
the ranges is 4.

Example 2:

Input:
n = 5
L[] = {1,5,9,13,21}
R[] = {15,8,12,20,30}
Output: 5

Explanation: The given ranges are 
[1,15] [5, 8] [9, 12] [13, 20] 
[21, 30]. The number that is most 
common or appears most times in 
the ranges is 5.

Your Task:
The task is to complete the function maxOccured() which returns the maximum occured integer in all ranges.
*/
let l = [1,5,9,13,21];
let r = [15,8,12,20,30];
let n = 5;
let maxx=4;
const arr = new Array(maxx+2).fill(0);
for(let i=0; i<n; i++){
    arr[l[i]]++;
    arr[r[i]+1]--;
}
let maximum = arr[0];
let res = 0;
for(let j=1; j<maxx+2; j++){
    arr[j] += arr[j-1];
    if(arr[j] > maximum){
        maximum = arr[j];
        res = j;
    }
}
console.log(res);
/*
class Solution {
    //Function to find the maximum occurred integer in all ranges.
    maxOccured(L, R, n, maxx)
    {
        //your code here
        const arr = new Array(maxx+2).fill(0);
for(let i=0; i<n; i++){
    arr[L[i]]++;
    arr[R[i]+1]--;
}
let maximum = arr[0];
let res = 0;
for(let j=1; j<maxx+2; j++){
    arr[j] += arr[j-1];
    if(arr[j] > maximum){
        maximum = arr[j];
        res = j;
    }
}
return res;
    }
}
*/