/* ZOHO, MICROSOFT
=====================
Given an array A of positive integers. Your task is to sort them in such a way that the first part of the array contains odd numbers sorted in descending order, rest portion contains even numbers sorted in ascending order. 

Example 1:

Input:
N = 7
Arr = {1, 2, 3, 5, 4, 7, 10}

Output:
7 5 3 1 2 4 10

Explanation:
Array elements 7 5 3 1 are odd
and sorted in descending order,
whereas 2 4 10 are even numbers
and sorted in ascending order.
 
Example 2:

Input:
N = 7
Arr = {0, 4, 5, 3, 7, 2, 1}

Output:
7 5 3 1 0 2 4
 
Your Task:  
You don't need to read input or print anything. Your task is to complete the function sortIt() which takes the array Arr[] and its size N as inputs and modifies the array Arr[].
*/
let arr = [0, 4, 5, 3, 7, 2, 1];
let n = 7;
for(let i=0;i<n;i++){
    if(arr[i]&1){
        arr[i] = arr[i]*(-1);
    }
}
arr.sort((x,y)=>x-y)
for(let i=0;i<n;i++){
    if(arr[i]&1){
        arr[i] = arr[i]*(-1);
    }
}
console.log(arr);

/*
class Solution{
    sortIt(arr,n){
        //code here
        for(let i=0;i<n;i++){
            if(arr[i]&1){
                arr[i]=arr[i]*(-1);
            }
        }
        arr.sort((a,b)=>a-b);
        for(let j=0;j<n;j++){
            if(arr[j]&1){
                arr[j]=arr[j]*(-1);
            }
        }
        return arr;
    }
}

*/
