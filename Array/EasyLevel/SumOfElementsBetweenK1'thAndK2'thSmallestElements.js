/*
Given an array A[] of N positive integers and two positive integers K1 and K2. Find the sum of all elements between K1th and K2th smallest elements of the array. It may be assumed that (1 <= k1 < k2 <= n).

Example 1:

Input:
N  = 7
A[] = {20, 8, 22, 4, 12, 10, 14} // 4 8 10 12 14 20 22
K1 = 3, K2 = 6
Output:
26

Explanation:
3rd smallest element is 10
6th smallest element is 20
Element between 10 and 20 
12,14. Their sum = 26.
 
Example 2:

Input
N = 6
A[] = {10, 2, 50, 12, 48, 13}
K1= 2, K2 = 6
Output:
73
 
Your Task:  
You don't need to read input or print anything. Your task is to complete the function sumBetweenTwoKth() which takes the array A[], its size N and two integers K1 and K2 as inputs and returns the sum of all the elements between K1th and K2th smallest elements.
*/
let arr = [10, 2, 50, 12, 48, 13];
let n = 6;
let k1 = 2, k2 = 6;
let sum = 0;
arr.sort((a,b)=>a-b);
for(let i=k1;i<k2-1;i++){
        sum = sum+arr[i];
}
console.log(sum);

/*
class Solution {
    sumBetweenTwoKth(A,N,K1,K2){
       //code here
       let sum=0;
       A.sort((a,b)=>a-b);
       for(let i=K1;i<K2-1;i++){
           sum=sum+A[i];
       }
       return sum;
    }
}
*/