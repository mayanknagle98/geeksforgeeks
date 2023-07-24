/*
Given a non-negative integer(without leading zeroes) represented as an array A of N digits. Your task is to add 1 to the number (increment the number by 1). The digits are stored such that the most significant digit is at the starting index of the array.

Example 1:

Input:
N = 4
A[] = {5, 6, 7, 8}
Output: 5 6 7 9

Explanation: 5678 + 1 = 5679

Example 2:

Input:
N = 3
A[] = {9, 9, 9}
Output: 1 0 0 0

Explanation: 999 + 1 = 1000

Your Task:
You don't need to read input or print anything. Your task is to complete the function addOne() which takes the array of integers a and n as parameters and returns an list of integers denoting the answer.
*/
let arr = [9,9,9,9];
let n = 4;
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
        ans.push(arr[i]);
    }
    ans.push(0);
    console.log(ans);
}
for(let i=0;i<n;i++){
    ans.push(arr[i]);
}
console.log(ans);

/*
class Solution{
    addOne(a,n){
        //code here
       let ans = [];
for(let i=n-1;i>=0;i--){
    if(a[i]==9){
        a[i]=0;
    }
    else{
        a[i]=a[i]+1;
        break;
    }
}
if(a[0]==0){
    a[0]=1;
    for(let i=0;i<n;i++){
        ans.push(a[i]);
    }
    ans.push(0);
    return ans;
}
for(let i=0;i<n;i++){
    ans.push(a[i])
}
return ans;
    }
}
*/