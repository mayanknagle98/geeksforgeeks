/*
Given a N x N matrix M. Write a program to find count of all the distinct elements common to all rows of the matrix. Print count of such elements.

Example 1:

Input: 
N = 4
M = {{2, 1, 4, 3},{1, 2, 3, 2},{3, 6, 2, 3},{5, 2, 5, 3}}
Output: 
2

Explaination: Only 2 and 3 are common in all rows.
Example 2:

Input: 
N = 5
M = {{12, 1, 14, 3, 16},{14, 2, 1, 3, 35},{14, 1, 14, 3, 11},{14, 5, 3, 2, 1},{1, 18, 3, 21, 14}}
Output: 
3

Explaination: 14, 3 and 1 are common in all the rows.

Your Task:
You do not need to read input or print anything. Your task is to complete the function distinct() which takes the matrix and n as input parameters and returns the number of distinct elements present in every row.
*/
let arr = [[2, 1, 4, 3],[1, 2, 3, 2],[3, 6, 2, 3],[5, 2, 5, 3]];
let n = 4;
let ans = 0;
for(let i = 0; i < arr[0].length; i++){
    let count = 0;
   let isDistinct = true;
    for(let l = 0; l < i; l++){
        if(arr[0][l] == arr[0][i]){
            isDistinct = false;
            break;
        }
    }
    if(isDistinct){
        for(let k = 1; k < arr.length; k++){
            for(let j = 0; j < arr[k].length; j++){
                if(arr[0][i] == arr[k][j]){
                    count ++;
                    break;
                }
            }
        }
        if(count == (arr.length -1)){
            ans += 1;
        }
    }
}
console.log(ans);

/*
class Solution {
    distinct(arr, n) {
        // write your code here
       let ans = 0;
for(let i = 0; i < arr[0].length; i++){
    let count = 0;
   let isDistinct = true;
    for(let l = 0; l < i; l++){
        if(arr[0][l] == arr[0][i]){
            isDistinct = false;
            break;
        }
    }
    if(isDistinct){
        for(let k = 1; k < arr.length; k++){
            for(let j = 0; j < arr[k].length; j++){
                if(arr[0][i] == arr[k][j]){
                    count ++;
                    break;
                }
            }
        }
        if(count == (arr.length -1)){
            ans += 1;
        }
    }
}
return ans;
    }
}
*/