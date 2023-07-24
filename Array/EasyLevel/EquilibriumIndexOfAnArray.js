/* AMAZON
===========
Equilibrium index of an array is an index such that the sum of elements at lower indexes is equal to the sum of elements at higher indexes.
Given an array, your task is to find the index of first Equilibrium point in the array.

Input Format:
The first line of input takes an integer T denoting the no of test cases, then T test cases follow. The first line of each test case is an integer N denoting The size of the array. Then in the next line are N space-separated values of the array. 

Output Format:
For each test case, the output will be the equilibrium index of the array. If no such index exists output will be -1.

User Task :
Your task is to complete the function (findEquilibrium) below which returns the index of the first Equilibrium point in the array. The function takes two arguments. The first argument is the array A[ ] and the second argument is the size of the array A.

Example(To be used only for expected output):
Input
2
4
1 2 0 3
4
1 1 1 1

Output
2
-1

Note: The Input/Output format and Examples given are used for the system's internal purpose, and should be used by a user for Expected Output only. As it is a function problem, hence a user should not read any input from stdin/console. The task is to complete the function specified, and not to write the full code.
*/
let arr = [1,2,0,3];
let n = 4;
let lsum = 0;
let tsum = 0;
for(let i = 0; i < n; i++){
    tsum += arr[i];
}
for(let i = 0; i < n; i++){
    if(tsum - arr[i] === lsum){
        console.log(i)
    } else {
        tsum -= arr[i];
        lsum += arr[i];
    }
}
console.log(-1)
/*
class Solution{
    findEquilibrium(arr,n){
        //code here
       let lsum = 0;
let tsum = 0;
for(let i = 0; i < n; i++){
    tsum += arr[i];
}
for(let i = 0; i < n; i++){
    if(tsum - arr[i] === lsum){
        return i;
    } else {
        tsum -= arr[i];
        lsum += arr[i];
    }
}
return -1;

    }
}
*/