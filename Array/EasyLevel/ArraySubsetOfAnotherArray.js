/* ACCOLITE, QUALCOMM, GE
============================
Given two arrays: a1[0..n-1] of size n and a2[0..m-1] of size m. Task is to check whether a2[] is a subset of a1[] or not. Both the arrays can be sorted or unsorted. There can be duplicate elements.

Example 1:

Input:
a1[] = {11, 7, 1, 13, 21, 3, 7, 3}
a2[] = {11, 3, 7, 1, 7}
Output:
Yes
Explanation:
a2[] is a subset of a1[]

Example 2:

Input:
a1[] = {1, 2, 3, 4, 4, 5, 6}
a2[] = {1, 2, 4}
Output:
Yes
Explanation:
a2[] is a subset of a1[]

Example 3:

Input:
a1[] = {10, 5, 2, 23, 19}
a2[] = {19, 5, 3}
Output:
No

Explanation:
a2[] is not a subset of a1[]

Your Task:  
You don't need to read input or print anything. Your task is to complete the function isSubset() which takes the array a1[], a2[], its size n and m as inputs and return "Yes" if arr2 is subset of arr1 else return "No" if arr2 is not subset of arr1.
*/
let a1 = [11, 7, 1, 13, 21, 3, 7, 3];
let a2 = [11, 3, 7, 1, 7];
let n = 8;
let m = 5;
a1.sort((a,b)=>a-b);
a2.sort((a,b)=>a-b);
let i=0,j=0;
while(i<n && j<m)
{
    if(a1[i]==a2[j]) 
    {
        j++;
    }
    i++;
}
if(j==m){
    console.log("Yes");
} 
console.log("No");

/*
class Solution{
    isSubset(a1, a2, n, m){
        //code here
        a1.sort((a,b)=>a-b);
a2.sort((a,b)=>a-b);
let i=0,j=0;
while(i<n && j<m)
{
    if(a1[i]==a2[j]) 
    {
        j++;
    }
    i++;
}
if(j==m){
    return "Yes";
} 
    return "No";
    }
}
*/