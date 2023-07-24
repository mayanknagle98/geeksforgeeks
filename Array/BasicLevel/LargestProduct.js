/*
Given an array consisting of N positive integers, and an integer k .You have to find the maximum product of k contiguous elements in the array. Your task is to complete the function which takes three arguments .The first argument  is the array A[ ] and second argument is an integer N denoting the size of the array A[ ] and the third argument  is an integer k.The function will return and value denoting the largest product of sub-array of size k.

Input:
The first line of input is an integer T denoting the no of test cases. Then T test casesfollow . The first line of each test case are two integer N and K separated by space .The next line contains N space separated values of the array A[ ].

Output:
Output of each test case will be an integer denoting the largest product of subarray of size k.

Example:
Input
1
4 2
1 2 3 4
Output
12 

Explanation:
The sub-array of size 2 will be 3 4 and the product is 12.

Note:The Input/Ouput format and Example given are used for system's internal purpose, and should be used by a user for Expected Output only. As it is a function problem, hence a user should not read any input from stdin/console. The task is to complete the function specified, and not to write the full code.
*/
let arr = [1,2,3,4];
let n = 4;
let k = 2;
let maxi = -1;
let pro = 1;
for(let i=0; i<=n-k; i++){
    pro = 1;
    for(let j=i; j<(i+k); j++){
        pro *= arr[j];
    }
    maxi = Math.max(pro, maxi);
}
console.log(maxi)