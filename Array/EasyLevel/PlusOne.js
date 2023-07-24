/* MICROSOFT, GOOGLE
=======================
Given a non-negative number represented as a list of digits, add 1 to the number (increment the number represented by the digits). The digits are stored such that the most significant digit is first element of array.

Example 1:

Input: 
N = 3
arr[] = {1, 2, 4}
Output: 
1 2 5

Explanation:
124+1 = 125, and so the Output

Example 2:

Input: 
N = 3
arr[] = {9,9,9}
Output: 
1 0 0 0

Explanation:
999+1 = 1000, and so the output

Your Task:
You don't need to read input or print anything. You only need to complete the function increment() that takes an integer N, and an array arr of size N as input and returns a list of integers denoting the new number which we get after adding one to the number denoted by the array arr.
*/
let arr = [9,9,9];
let n = 3;
let ans = [];
for(let i=n-1;i>=0;i--){
    if(arr[i]==9){
        arr[i]=0;
    }
    else{
        arr[i]=arr[i]+1;
        break;
    }
}
if(arr[0]==0){
    arr[0]=1;
    for(let i=0;i<n;i++){
        ans.push(arr[i])
    }
    ans.push(0);
    console.log(ans)
}
for(let i=0;i<n;i++){
    ans.push(arr[i]);
}
console.log(ans);

/*
class Solution {
    increment(arr,n){
        //code here
        let ans = [];
for(let i=n-1;i>=0;i--){
    if(arr[i]==9){
        arr[i]=0;
    }
    else{
        arr[i]=arr[i]+1;
        break;
    }
}
if(arr[0]==0){
    arr[0]=1;
    for(let i=0;i<n;i++){
        ans.push(arr[i])
    }
    ans.push(0);
    return ans;
}
for(let i=0;i<n;i++){
    ans.push(arr[i]);
}
return ans;
    }
}
*/