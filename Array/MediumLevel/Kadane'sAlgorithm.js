/*  ZOHO, FLIPKART, MORGAN STANLEY, ACCOLITE, AMAZON, MICROSOFT, SAMSUNG, SNAPDEAL, 24x7 INNOVATION LABS, CITRIX, D-E SHAW, FACTSET, HIKE, HOUSING.COM, METLIFE, OLA CABS, ORACLE, PAYU, TERADATA, VISA, WALMART, ADOBE, GOOGLE, ARCESIUM.
=========================================================================================
Given an array Arr[] of N integers. Find the contiguous sub-array(containing at least one number) which has the maximum sum and return its sum.

Example 1:

Input:
N = 5
Arr[] = {1,2,3,-2,5}
Output:
9

Explanation:
Max subarray sum is 9
of elements (1, 2, 3, -2, 5) which 
is a contiguous subarray.

Example 2:

Input:
N = 4
Arr[] = {-1,-2,-3,-4}
Output:
-1

Explanation:
Max subarray sum is -1 
of element (-1)

Your Task:
You don't need to read input or print anything. The task is to complete the function maxSubarraySum() which takes Arr[] and N as input parameters and returns the sum of subarray with maximum sum.
*/
let arr = [-1,-2,-3,-4];
let n = 4;
let ans=arr[0],sum=0;
for(let i=0;i<n;i++){
    sum=sum+arr[i];
    if(sum>ans){
        ans=sum;
    }
    if(sum<=0){
        sum=0;
    }
}
console.log(ans);

/*
class Solution {
    //Function to find the sum of contiguous subarray with maximum sum.
    maxSubarraySum(arr, N){
        // code here
      let msf=arr[0],sum=0;
       for(let i=0;i<N;i++) //maximizing sum
       {
           sum+=arr[i];
           if(sum>msf)
               msf=sum;
           if(sum<=0)
               sum=0;
       }
       return msf;
    } 
}
*/