/*  AMAZON, MICROSOFT, ADOBE
===============================
Given a positive integer N, return the Nth row of pascal's triangle.
Pascal's triangle is a triangular array of the binomial coefficients formed by summing up the elements of previous row.

Example :
1
1 1
1 2 1
1 3 3 1
For N = 3, return 3rd row i.e 1 2 1

Example 1:

Input:
N = 4
Output: 1 3 3 1

Explanation: 4th row of pascal's triangle
is 1 3 3 1.

Example 2:

Input:
N = 5
Output: 1 4 6 4 1

Explanation: 5th row of pascal's triangle
is 1 4 6 4 1.
 
Your Task:
Complete the function nthRowOfPascalTriangle() which takes n, as input parameters and returns an array representing the answer. The elements can be large so return it modulo 109 + 7. You don't to print answer or take inputs.
*/
let n = 4;
if (n === 0) {
    console.log([]);
}
    if (n === 1){
        console.log([[1]]);
    } 
    let result = [];
    for (let row = 1; row <= n; row++) {
        let arr = [];
        for (let col = 0; col < row; col++) {
            if (col === 0 || col === row - 1) {
                arr.push(1);
            } else {
                arr.push((result[row-2][col-1] + result[row-2][col]));
            }
        }
        result.push(arr);
    }
     console.log(result);
