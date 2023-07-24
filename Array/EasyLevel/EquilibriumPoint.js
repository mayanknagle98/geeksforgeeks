/* AMAZON, ADOBE
==================
Given an array A of n positive numbers. The task is to find the first Equilibrium Point in an array. 
Equilibrium Point in an array is a position such that the sum of elements before it is equal to the sum of elements after it.

Note: Retun the index of Equilibrium point. (1-based index)

Example 1:

Input: 
n = 5 
A[] = {1,3,5,2,2} 
Output: 3 

Explanation:  
equilibrium point is at position 3 
as elements before it (1+3) = 
elements after it (2+2). 
 
Example 2:

Input:
n = 1
A[] = {1}
Output: 1

Explanation:
Since its the only element hence
its the only equilibrium point.
 
Your Task:
The task is to complete the function equilibriumPoint() which takes the array and n as input parameters and returns the point of equilibrium. Return -1 if no such point exists.
*/
let arr = [1,3,5,2,2];
let n = 5;
let rsum = 0;
let lsum = 0;
if(n==1){
    console.log(1);
}
for(let i=1;i<n;i++){
    rsum = rsum+arr[i];
}
for(let i=1;i<n;i++){
    lsum = lsum+arr[i-1];
    rsum = rsum-arr[i];
    if(lsum==rsum){
        console.log(i+1);
    }
}
console.log(-1);

/*
class Solution {
    // Function to find equilibrium point in the array.
    equilibriumPoint(a, n)
    {
        //your code here
        let rsum=0,lsum=0;
        if(n==1){
            return 1;
        }
        for(let i=1;i<n;i++){
            rsum=rsum+a[i];
        }
        for(let i=1;i<n;i++){
            lsum=lsum+a[i-1];
            rsum=rsum-a[i];
            if(lsum==rsum){
                return i+1;
            }
        }
        return -1;
    }
}
*/
