/* ZOHO, MICROSOFT
=====================
Given an array of integers of size, N. Assume ‘0’ as the invalid number and all others as a valid number. Write a program that modifies the array in such a way that if the next number is a valid number and is the same as the current number, double the current number value and replace the next number with 0. After the modification, rearrange the array such that all 0’s are shifted to the end and the sequence of the valid number or new doubled number is maintained as in the original array.

Example 1:

â€‹Input : arr[ ] = {2, 2, 0, 4, 0, 8}
Output : 4 4 8 0 0 0

Explanation:
At index 0 and 1 both the elements are same.
So, we can change the element at index 0 to 
4 and element at index 1 is 0 then we shift 
all the values to the end of the array. 
So, array will become [4, 4, 8, 0, 0, 0].

Example 2:

Input : arr[ ] = {0, 2, 2, 2, 0, 6, 6, 0, 0, 8}
Output :  4 2 12 8 0 0 0 0 0 0

Your Task:
This is a function problem. The input is already taken care of by the driver code. You only need to complete the function modifyAndRearrangeArr() that takes an array (arr) and its size (n), and modifies it in-place.
*/
let arr = [2, 2, 0, 4, 0, 8];
let n = 6;
let v = [];
let v1 = [];
let i = 0;
for(let i=0;i<n-1;i++){
    if(arr[i]==arr[i+1]){
        arr[i]=2*arr[i];
        arr[i+1]=0;
    }
}
for(let i=0;i<n;i++){
    if(arr[i]==0){
        v.push(arr[i]);
    }
    else{
        v1.push(arr[i]);
    }
}
for(let j=0;j<v1.length;j++){
    arr[i] = v1[j];
    i++;
}
for(let j=0;j<v.length;j++){
    arr[i] = v[j];
    i++;
}
console.log(arr);

/*
class Solution{
    modifyAndRearrangeArr(arr,n){
        //code here
        let v = [];
        let v1 = [];
        let i = 0;
for(let i=0;i<n-1;i++){
    if(arr[i]==arr[i+1]){
        arr[i]=2*arr[i];
        arr[i+1]=0;
    }
}
for(let i=0;i<n;i++){
    if(arr[i]==0){
        v.push(arr[i]);
    }
    else{
        v1.push(arr[i]);
    }
}
for(let j=0;j<v1.length;j++){
    arr[i] = v1[j];
    i++;
}
for(let j=0;j<v.length;j++){
    arr[i] = v[j];
    i++;
}
return arr;
    }
}
*/