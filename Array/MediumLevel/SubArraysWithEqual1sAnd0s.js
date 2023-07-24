/*
Given an array containing 0s and 1s. Find the number of subarrays having equal number of 0s and 1s.

Example 1:

Input:
n = 7
A[] = {1,0,0,1,0,1,1}
Output: 8

Explanation: The index range for the 8 
sub-arrays are: (0, 1), (2, 3), (0, 3), (3, 4), 
(4, 5) ,(2, 5), (0, 5), (1, 6)

Example 2:

Input:
n = 5
A[] = {1,1,1,1,0}
Output: 1

Explanation: The index range for the 
subarray is (3,4).

Your Task:
You don't need to read input or print anything. Your task is to complete the function countSubarrWithEqualZeroAndOne() which takes the array arr[] and the size of the array as inputs and returns the number of subarrays with equal number of 0s and 1s.
*/
let arr = [1,0,0,1,0,1,1];
let n = 7;
let mp = new Map();
let count=0;
let sum=0;
for(let i=0;i<n;i++){
    if(arr[i]==0){
        arr[i]=-1;
    }
}
for(let i=0;i<n;i++){
    sum+=arr[i];
    if(sum==0){
        count++;
    }
    if(mp.has(sum)){
        count += mp.get(sum);
    }
    mp.set(sum, (mp.get(sum) || 0) + 1);
}
console.log(count);

/*
class Solution {
    //Function to count subarrays with 1s and 0s.
    countSubarrWithEqualZeroAndOne(arr, n){
        // code here
        let mp = new Map();
let count=0;
let sum=0;
for(let i=0;i<n;i++){
    if(arr[i]==0){
        arr[i]=-1;
    }
}
for(let i=0;i<n;i++){
    sum+=arr[i];
    if(sum==0){
        count++;
    }
    if(mp.has(sum)){
        count += mp.get(sum);
    }
    mp.set(sum, (mp.get(sum) || 0) + 1);
}
return count;
    }
}

*/
