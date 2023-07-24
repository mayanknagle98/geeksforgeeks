/* ADOBE
==========

Given two arrays of A and B respectively of sizes N1 and N2, the task is to calculate the product of the maximum element of the first array and minimum element of the second array.

Example 1:

Input : A[] = {5, 7, 9, 3, 6, 2}, 
        B[] = {1, 2, 6, -1, 0, 9}
Output : -9

Explanation:
The first array is 5 7 9 3 6 2. 
The max element among these elements is 9.
The second array is 1 2 6 -1 0 9.
The min element among these elements is -1.
The product of 9 and -1 is 9*-1=-9.

Example 2:

Input : A[] = {0, 0, 0, 0}, 
        B[] = {1, -1, 2}
Output : 0

Your Task:
This is a function problem. The input is already taken care of by the driver code. You only need to complete the function find_multiplication() that takes an array of integer (A), another array of integer (B), size of array A(n), size of array B(m) and return the product of the max element of the first array and the minimum element of the second array. The driver code takes care of the printing.
*/
let arr1 = [5, 7, 9, 3, 6, 2];
let arr2 = [1, 2, 6, -1, 0, 9];
let n1 = 6;
let n2 = 6;
let largest = arr1[0];
let smallest = arr2[0];
let result;

for(let i=0;i<n1;i++){
    if(largest<arr1[i]){
        largest=arr1[i];
    }
}
for(let j=0;j<n2;j++){
    if(smallest>arr2[j]){
        smallest=arr2[j];
    }
}
result = parseInt(largest*smallest);
console.log(result);

/*
class Solution{
    find_multiplication(a,n,b,m){
        //code here
        let largest = a[0];
        let smallest = b[0];
        let result;
        for(let i=0;i<n;i++){
         if(largest<a[i]){
        largest=a[i];
    }
}
    for(let j=0;j<m;j++){
    if(smallest>b[j]){
        smallest=b[j];
    }
}
result = parseInt(largest*smallest);
return result;
    }
}
*/