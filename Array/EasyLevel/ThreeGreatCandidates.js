/* FLIPKART, AMAZON, SNAPDEAL
===============================
The hiring team aims to find 3 candidates who are great collectively. Each candidate has his or her ability expressed as an integer. 3 candidates are great collectively if product of their abilities is maximum. Given abilities of N candidates in an array arr[], find the maximum collective ability from the given pool of candidates.

Example 1:

Input:
N = 5
Arr[] = {10, 3, 5, 6, 20}
Output: 1200

Explanation:
Multiplication of 10, 6 and 20 is 1200.

Example 2:

Input:
N = 5
Arr[] = {-10, -3, -5, -6, -20}
Output: -90

Explanation:
Multiplication of -3, -5 and -6 is -90.

Your Task:
You don't need to read input or print anything. Your task is to complete the function maxProduct() which takes the array of integers arr[] and n as input parameters and returns the maximum product.
*/
let arr = [10, 3, 5, 6, 20];
let n = 5;
let max1 = Number.MIN_SAFE_INTEGER;
let max2 = Number.MIN_SAFE_INTEGER;
let max3 = Number.MIN_SAFE_INTEGER;
let min1 = Number.MAX_SAFE_INTEGER;
let min2 = Number.MAX_SAFE_INTEGER;
if(n<3){
    console.log(-1)
}
for(let i=0;i<n;i++)
       {
           if(arr[i]>max1)
           {
               max3=max2;
               max2=max1;
               max1=arr[i];
           }
           else if(arr[i]>max2)
           {
               max3=max2;
               max2=arr[i];
           }
           else if(arr[i]>max3)
           {
               max3=arr[i];
           }
           
           if(arr[i]<min1)
           {
               min2=min1;
               min1=arr[i];
           }
           else if(arr[i]<min2)
           {
               min2=arr[i];
           }
           
       }
  let res = Math.max(min1*min2*max1,max1*max2*max3);
  console.log(res);

/*
class Solution{
    maxProduct(arr,n){
        //code here
let max1 = Number.MIN_SAFE_INTEGER;
let max2 = Number.MIN_SAFE_INTEGER;
let max3 = Number.MIN_SAFE_INTEGER;
let min1 = Number.MAX_SAFE_INTEGER;
let min2 = Number.MAX_SAFE_INTEGER;
if(n<3){
    return -1;
}
for(let i=0;i<n;i++)
       {
           if(arr[i]>max1)
           {
               max3=max2;
               max2=max1;
               max1=arr[i];
           }
           else if(arr[i]>max2)
           {
               max3=max2;
               max2=arr[i];
           }
           else if(arr[i]>max3)
           {
               max3=arr[i];
           }
           
           if(arr[i]<min1)
           {
               min2=min1;
               min1=arr[i];
           }
           else if(arr[i]<min2)
           {
               min2=arr[i];
           }
           
       }
  let res = Math.max(min1*min2*max1,max1*max2*max3);
return res;        
    }
}
*/