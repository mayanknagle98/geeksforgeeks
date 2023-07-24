/* AMAZON, MICROSOFT
=======================
Given an array arr[] containing N integers. In one step, any element of the array can either be increased or decreased by one. Find minimum steps required such that the product of the array elements becomes 1.

Example 1:

Input:
N = 3
arr[] = {-2, 4, 0}
Output:
5

Explanation:
We can change -2 to -1, 0 to -1 and 4 to 1.
So, a total of 5 steps are required
to update the elements such that
the product of the final array is 1. 

Example 2:
Input:
N = 3
arr[] = {-1, 1, -1} 
Output :
0

Explanation:
Product of the array is already 1.
So, we don't need to change anything.

Your Task:  
You don't need to read input or print anything. Your task is to complete the function makeProductOne() which takes an integer N and an array arr of size N as input and returns the minimum steps required.
*/
let arr = [-1, 1, -1];
let n = 3;
let zeroes = 0, neg = 0, steps = 0;
for(let i=0;i<n;i++){
    if(arr[i]==0){
        zeroes++;
    }
    else if(arr[i]>0){
        steps = steps+(arr[i]-1);
    }
    else{
        neg++;
        steps = steps+(-arr[i]-1)
    }
}
if(neg%2==0){
    steps = steps+zeroes;
}
else{
    if(zeroes>0){
        steps = steps+zeroes;
    }
    else{
        steps = steps+2;
    }
}
console.log(steps);

/*
class Solution{
    makeProductOne(arr,n){
        //code here
        let zeroes = 0, neg = 0, steps = 0;
for(let i=0;i<n;i++){
    if(arr[i]==0){
        zeroes++;
    }
    else if(arr[i]>0){
        steps = steps+(arr[i]-1);
    }
    else{
        neg++;
        steps = steps+(-arr[i]-1)
    }
}
if(neg%2==0){
    steps = steps+zeroes;
}
else{
    if(zeroes>0){
        steps = steps+zeroes;
    }
    else{
        steps = steps+2;
    }
}
return steps;
    }
}
*/