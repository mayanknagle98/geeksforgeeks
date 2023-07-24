/* ACCOLITE, AMAZON, GOLDMAN SACHS, GOOGLE, FACEBOOK
=======================================================
Given an array of integers (A[])  and a number x, find the smallest subarray with sum greater than the given value. If such a subarray do not exist return 0 in that case.

Note: The answer always exists. It is guaranteed that x doesn't exceed the summation of a[i] (from 1 to N).

Example 1:

Input:
A[] = {1, 4, 45, 6, 0, 19}
x  =  51
Output: 3

Explanation:
Minimum length subarray is 
{4, 45, 6}

Example 2:
Input:
A[] = {1, 10, 5, 2, 7}
   x  = 9
Output: 1

Explanation:
Minimum length subarray is {10}
 
Your Task:  
You don't need to read input or print anything. Your task is to complete the function smallestSubWithSum() which takes the array A[], its size N and an integer X as inputs and returns the required ouput.
*/
let arr = [1, 10, 5, 2, 7];
let n =  5;
let x = 9;
let i = 0, j=0, sum=arr[0], min=Number.MAX_VALUE;
while(j<n){
    if(sum<=x){
        j++;
        sum=sum+arr[j];
    }
    else if(sum>x){
        min = Math.min(min,j-i+1);
        sum=sum-arr[i];
        i++;
    }
}
console.log(min);

/*
class Solution {

    smallestSubWithSum(a,n,x){
        //code here
        let i=0,j=0,sum=a[0],min=Number.MAX_VALUE;
        while(j<n){
            if(sum<=x){
                j++;
                sum=sum+a[j];
            }
            else if(sum>x){
                min=Math.min(min,j-i+1);
                sum=sum-a[i];
                i++;
            }
        }
        return min;
    }
}
*/