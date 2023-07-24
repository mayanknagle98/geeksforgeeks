/*  AMAZON, MAKEMYTRIP, FACEBOOK, UNITED HEALTH GROUP
=========================================================
Given two unsorted arrays A of size N and B of size M of distinct elements, the task is to find all pairs from both arrays whose sum is equal to X.

Note: All pairs should be printed in increasing order of u. For eg. for two pairs (u1,v1) and (u2,v2), if u1 < u2 then
(u1,v1) should be printed first else second.

Example 1:

Input:
A[] = {1, 2, 4, 5, 7}
B[] = {5, 6, 3, 4, 8} 
X = 9 
Output: 
1 8
4 5 
5 4

Explanation:
(1, 8), (4, 5), (5, 4) are the
pairs which sum to 9.

Example 2:
Input:
A[] = {-1, -2, 4, -6, 5, 7}
B[] = {6, 3, 4, 0} 
X = 8 
Output:
4 4 
5 3

Your Task:  
You don't need to read input or print anything. Your task is to complete the function allPairs() which takes the array A[], B[], its size N and M respectively, and an integer X as inputs and returns the sorted vector pair values of all the pairs u,v where u belongs to array A and v belongs to array B. If no such pair exists return empty vector pair.
*/
let arr1 = [1, 2, 4, 5, 7];
let arr2 = [5, 6, 3, 4, 8];
let x = 9;
let n = 5, m = 5;
arr1.sort((a,b)=>a-b);
arr2.sort((a,b)=>a-b);
arr2.reverse();
let ans = [];
let start1=0, start2=0;
while(start1!=n&&start2!=m){
    if(arr1[start1]+arr2[start2]==x)
    {
        ans.push(arr1[start1],arr2[start2])
        ++start1;
        ++start2;
    }
   else if(arr1[start1]+arr2[start2]<x)
    {
        ++start1;
    }
     else if(arr1[start1]+arr2[start2]>x)
    {
        ++start2;
    }
}
console.log(ans);

/*
class Solution{
    allPairs(A, B, N, M, X){
        //code here
        A.sort((a,b)=>a-b);
B.sort((a,b)=>a-b);
B.reverse();
let ans = [];
let start1=0, start2=0;
while(start1!=N&&start2!=M){
    if(A[start1]+B[start2]==X)
    {
        ans.push(A[start1],B[start2])
        ++start1;
        ++start2;
    }
   else if(A[start1]+B[start2]<X)
    {
        ++start1;
    }
     else if(A[start1]+B[start2]>X)
    {
        ++start2;
    }
}
return ans;
    }
}
*/