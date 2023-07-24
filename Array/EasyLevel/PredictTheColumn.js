/*
Given a matrix(2D array) M of size N*N consisting of 0s and 1s only. The task is to find the column with maximum number of 0s.

Example:

Input:
N = 3
M[][] = {{1, 1, 0},
         {1, 1, 0},
         {1, 1, 0}}
Output:2

Explanation:
2nd column (0-based indexing) 
is having 3 zeros which is 
maximum among all columns.
 
Your Task:
Your task is to complete the function columnWithMaxZero() which should return the column number with the maximum number of zeros. If more than one column exists, print the one which comes first.
*/
let arr = [[1, 1, 0],[1, 1, 0],[1, 1, 0]];
let n = 3;
let ans = 0;
let index = 0;
let count = 0;
for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
        if(arr[j][i]==0){
            count++;
        }
    }
    if(count>ans){
        index=i;
    }
    ans = Math.max(ans,count);
}
console.log(index)
/*
class Solution{
    columnWithMaxZeros(M,n){
        //code here
        let ans = 0;
        let index = 0;
        for(let i=0;i<n;i++){
            let count = 0;
            for(let j=0;j<n;j++){
                if(M[j][i]==0){
                    count++;
                }
            }
            if(count>ans){
                index= i;
            }
            ans = Math.max(ans,count);
        }
       return index;
    }
}
*/