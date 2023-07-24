/*
Given an array A[] of positive integers. The task is to complete the function which returns an integer denoting the minimum sum subsequence from the array such that at least one value among all groups of four consecutive elements is picked.
Examples:

Input: A[] = {1, 2, 3, 4, 5, 6, 7, 8}
Output: 6
6 is sum of output subsequence {1, 5}
Following 4 length subarrays are possible
(1, 2, 3, 4), (2, 3, 4, 5), (3, 4, 5, 6),
(4, 5, 6, 7), (5, 6, 7, 8)
Here, Our subsequence {1, 5} has an element from all
above groups of four consecutive elements.

Input: A[] = {2, 1, 3}

Output: 1

The N (size of A) is less than 4, so the subsequnce is {1}.

Input: A[] = {1, 2, 3, 3, 4, 5, 6, 1}
Output: 4
The subsequence is {3, 1}. Here we consider
second three.

Input:
The first line of input contains an integer T denoting the no of test cases. Then T test cases follow. Each test case contains two lines. The first line of each test case contains an integer N. Then in the next line are N space separated values of the array A[].

Output:
For each test case in a new line output will be the min sum of such subsequence .

Example(To be used only for expected output):
Input:
2
8
1 2 3 4 5 6 7 8
8
1 2 3 3 4 5 6 1
Output:
6
4
*/
let arr = [1, 2, 3, 3, 4, 5, 6, 1];
let n = 8;
let dp = [];
if (n == 1){
    console.log(arr[0]) ;
}
if (n == 2){
    console.log(Math.min(arr[0], arr[1])) ;
}
if (n == 3){
    console.log(Math.min(arr[0], Math.min(arr[1], arr[2]))) ;
}
if (n == 4){
    console.log(Math.min(Math.min(arr[0], arr[1]), Math.min(arr[2], arr[3]))) ;
}
    dp[0] = arr[0];
    dp[1] = arr[1];
    dp[2] = arr[2];
    dp[3] = arr[3];
    for(let i = 4; i < n; i++){
        dp[i] = arr[i] + Math.min(Math.min(dp[i - 1], dp[i - 2]), Math.min(dp[i - 3], dp[i - 4]));
    }
    console.log(Math.min(Math.min(dp[n - 1], dp[n - 2]),
    Math.min(dp[n - 4], dp[n - 3]))) ;

/*
class Solution {
    minSum(arr,n){
       //code here
       let dp = [];
if (n == 1){
    return arr[0];
}
if (n == 2){
    return Math.min(arr[0], arr[1]) ;
}
if (n == 3){
    return Math.min(arr[0], Math.min(arr[1], arr[2])) ;
}
if (n == 4){
    return Math.min(Math.min(arr[0], arr[1]), Math.min(arr[2], arr[3]));
}
    dp[0] = arr[0];
    dp[1] = arr[1];
    dp[2] = arr[2];
    dp[3] = arr[3];
    for(let i = 4; i < n; i++){
        dp[i] = arr[i] + Math.min(Math.min(dp[i - 1], dp[i - 2]), Math.min(dp[i - 3], dp[i - 4]));
    }
    return Math.min(Math.min(dp[n - 1], dp[n - 2]),
    Math.min(dp[n - 4], dp[n - 3])) ;
    }
}

*/