
/* AMAZON
===========
Union of two arrays can be defined as the common and distinct elements in the two arrays.
Given two sorted arrays of size n and m respectively, find their union.

Example 1:

Input: 
n = 5, arr1[] = {1, 2, 3, 4, 5}  
m = 3, arr2[] = {1, 2, 3}
Output: 1 2 3 4 5
Explanation: Distinct elements including 
both the arrays are: 1 2 3 4 5.
 
Example 2:

Input: 
n = 5, arr1[] = {2, 2, 3, 4, 5}  
m = 5, arr2[] = {1, 1, 2, 3, 4}
Output: 1 2 3 4 5

Explanation: Distinct elements including 
both the arrays are: 1 2 3 4 5.
 
Example 3:

Input:
n = 5, arr1[] = {1, 1, 1, 1, 1}
m = 5, arr2[] = {2, 2, 2, 2, 2}
Output: 1 2

Explanation: Distinct elements including 
both the arrays are: 1 2.

Your Task: 
You do not need to read input or print anything. Complete the function findUnion() that takes two arrays arr1[], arr2[], and their size n and m as input parameters and returns a list containing the union of the two arrays. 
*/
let arr1 = [1, 1, 1, 1, 1];
let arr2 = [2, 2, 2, 2, 2];
let n = 5, m = 5;
let union = [];
let i = 0, j = 0;
while(i < n && j < m){
    if(arr1[i] < arr2[j]){
        union.push(arr1[i++]);
        while(i < n && arr1[i] == arr1[i-1]) i++;
    }
    else if(arr2[j] < arr1[i]){
        union.push(arr2[j++]);
        while(j < m && arr2[j] == arr2[j-1]) j++;
    }
    else{
        union.push(arr1[i++]);
        j++;
        while(i < n && arr1[i] == arr1[i-1]) i++;
        while(j < m && arr2[j] == arr2[j-1]) j++;
    }
}
while(i < n){
    union.push(arr1[i++]);
    while(i < n && arr1[i] == arr1[i-1]) i++;
}
while(j < m){
    union.push(arr2[j++]);
    while(j < m && arr2[j] == arr2[j-1]) j++;
}
console.log(union);

/*
class Solution {
    //Function to return a list containing the union of the two arrays. 
    findUnion(arr1, arr2, n, m)
    {
        //your code here
      let unionn = [];
let i = 0, j = 0;
while(i < n && j < m){
    if(arr1[i] < arr2[j]){
        unionn.push(arr1[i++]);
        while(i < n && arr1[i] == arr1[i-1]) i++;
    }
    else if(arr2[j] < arr1[i]){
        unionn.push(arr2[j++]);
        while(j < m && arr2[j] == arr2[j-1]) j++;
    }
    else{
        unionn.push(arr1[i++]);
        j++;
        while(i < n && arr1[i] == arr1[i-1]) i++;
        while(j < m && arr2[j] == arr2[j-1]) j++;
    }
}
while(i < n){
    unionn.push(arr1[i++]);
    while(i < n && arr1[i] == arr1[i-1]) i++;
}
while(j < m){
    unionn.push(arr2[j++]);
    while(j < m && arr2[j] == arr2[j-1]) j++;
}
return unionn;
    }
}
*/