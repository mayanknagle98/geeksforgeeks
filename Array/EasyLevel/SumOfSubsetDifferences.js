/*
Given an array S consisting of N numbers, find the sum of difference between last and first element of each subset.

Example 1:

Input:
S = [5,8]
Output: 
3

Explanation: There are 3 subsets possible for the given array S.
1 -> [5] having first and last element same i.e. 5
so the difference is 0.
2 -> [8] having first and last element same i.e. 8
so the difference is 0.
3 -> [5,8] having first and last element as 5 and 8
respectively. So the difference is 8-5 = 3
Total difference is 0 + 0 + 3 = 3

Your Task:
You don't need to read input or print anything. You are required to complete the function sumDiff which returns an integer denoting the sum of difference between last and first element for each subset of array S.
*/
let arr = [5,8];
let n = 2;
let lans = 0;
let rans = 0;
let result;
for(let i=0;i<n;i++){
    lans = lans+arr[i]*Math.pow(2,n-i-1);
}
for(let i=0;i<n;i++){
    rans = rans+arr[i]*Math.pow(2,i);
}
result = rans-lans;
console.log(result);

/*
class Solution {
    sumDiff(S, n) {
        //code here
        let lans = 0;
        let rans = 0;
        let result;
        for(let i=0;i<n;i++){
            lans = lans+S[i]*Math.pow(2,n-i-1);
        }
        for(let i=0;i<n;i++){
            rans = rans+S[i]*Math.pow(2,i);
        }
        result = rans-lans;
        return result;
    }
}
*/
