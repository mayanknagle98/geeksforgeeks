/* ADOBE
==========
In Geekland there is a grid of coins of size N x N. You have to find the maximum sum of coins in any sub-grid of size K x K.
Note: Coins of the negative denomination are also possible at Geekland.

Example 1:

Input: N = 5, K = 3 
mat[[]] = {1, 1, 1, 1, 1},{2, 2, 2, 2, 2},{3, 8, 6, 7, 3},{4, 4, 4, 4, 4},{5, 5, 5, 5, 5}
Output: 48

Explanation: {8, 6, 7},{4, 4, 4},{5, 5, 5}
has the maximum sum

Example 2:

Input: N = 1, K = 1
mat[[]] = {{4}} 
Output: 4

Your Task:  
You don't need to read input or print anything. Complete the function Maximum_Sum() which takes the matrix mat[], size of Matrix N, and value K as input parameters and returns the maximum sum.
*/
let arr = [[1, 1, 1, 1, 1],[2, 2, 2, 2, 2],[3, 8, 6, 7, 3],[4, 4, 4, 4, 4],[5, 5, 5, 5, 5]];
let n = 5;
let k = 3;
let mx = Number.MIN_SAFE_INTEGER;
let dp = new Array(n+1).fill().map(() => new Array(n+1).fill(0));
for(let i=0;i<=n;i++){
    for(let j=0;j<=n;j++){
        if(i == 0 || j == 0)
            dp[i][j] = 0;
        else{
            dp[i][j] = arr[i-1][j-1] + dp[i-1][j] + dp[i][j-1] - dp[i-1][j-1]; 
        }
        if(i>=k && j>=k){
            mx = Math.max(dp[i][j]-(dp[i][j-k] + dp[i-k][j] - dp[i-k][j-k]),mx);
        }
    }
}
console.log(mx);

/*
class Solution{
    Maximum_Sum(arr,n, k){
        //code here
        let max = Number.MIN_SAFE_INTEGER;
let dp = new Array(n+1).fill().map(() => new Array(n+1).fill(0));
for(let i=0;i<=n;i++){
    for(let j=0;j<=n;j++){
        if(i == 0 || j == 0)
            dp[i][j] = 0;
        else{
            dp[i][j] = arr[i-1][j-1] + 
            dp[i-1][j] + dp[i][j-1] - dp[i-1][j-1]; 
        }
        if(i>=k && j>=k){
            max = Math.max(dp[i][j]-(dp[i][j-k] + 
            dp[i-k][j] - dp[i-k][j-k]),max);
        }
    }
}
return max;
    }
}
*/