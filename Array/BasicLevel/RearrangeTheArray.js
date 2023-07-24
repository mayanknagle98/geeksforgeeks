/*
Given an array arr of n integers, task is to print the array in the order – smallest number, largest number, 2nd smallest number, 2nd largest number, 3rd smallest number, 3rd largest number and so on.

Example 1:

Input:
n = 9
arr[] = {1, 9, 2, 8, 3, 7, 4, 6, 5}
Output:
1 9 2 8 3 7 4 6 5

Explanation:
Smallest number is 1. Largest number is 9. 
2nd smallest number is 2. Then 2nd largest
number is 8. And so on.

Example 2:

Input:
n = 4
arr[] = {1, 2, 3, 4}
Output:
1 4 2 3

Your Task:
You don't need to read input or print anything. Your task is to complete the function rearrangeArray() which takes the array of integers arr and n as parameters and returns void. You need to change the array itself.
*/
let arr = [1, 9, 2, 8, 3, 7, 4, 6, 5];
let n = 9;
const res = new Array(n);
let i = 0;
let j = n - 1;
let k = 0;
arr.sort((a,b)=>a-b)
while (i <= j){
    if(i === j){
        res[k] = arr[i++];
    }
    else{
        res[k++] = arr[i++];
        res[k++] = arr[j--];
    }
}
for(let p=0;p<n;p++){
    arr[p] = res[p];
}
console.log(arr);

/*
class Solution {
  rearrangeArray(arr, n) {
    //code here
    let res = new Array(n);
    let i=0;
    let j=n-1;
    let k=0;
    arr.sort((a,b)=>a-b)
    while(i<=j){
        if(i===j){
            res[k]=arr[i++];
        }
        else{
            res[k++]=arr[i++];
            res[k++]=arr[j--];
        }
    }
    for(let p=0;p<n;p++){
        arr[p]=res[p];
    }
    return arr;
  }
}
*/