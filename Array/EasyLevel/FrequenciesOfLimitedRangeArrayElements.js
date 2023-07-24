/* PAYTM, VMWARE, ZOHO, AMAZON, MICROSOFT
============================================
Given an array A[] of N positive integers which can contain integers from 1 to P where elements can be repeated or can be absent from the array. Your task is to count the frequency of all elements from 1 to N.
Note: The elements greater than N in the array can be ignored for counting and do modify the array in-place.

Example 1:

Input:
N = 5
arr[] = {2, 3, 2, 3, 5}
P = 5
Output:
0 2 2 0 1

Explanation: 
Counting frequencies of each array element
We have:
1 occurring 0 times.
2 occurring 2 times.
3 occurring 2 times.
4 occurring 0 times.
5 occurring 1 time.

Example 2:

Input:
N = 4
arr[] = {3,3,3,3}
P = 3
Output:
0 0 4 0

Explanation: 
Counting frequencies of each array element
We have:
1 occurring 0 times.
2 occurring 0 times.
3 occurring 4 times.
4 occurring 0 times.

Your Task:
You don't need to read input or print anything. Complete the function frequencycount() that takes the array and n as input parameters and modify the array itself in place to denote the frequency count of each element from 1 to N. i,e element at index 0 should represent the frequency of 1, and so on.
*/
let arr = [2, 3, 2, 3, 5];
let n = 5;
let p = 5;

for(let i=0; i<n; i++) {
    arr[i]--;
}
for(let i=0; i<n; i++) {
    if(arr[i]%p < n) {
        arr[arr[i]%p] = arr[arr[i]%p] + p;
    }
}
for(let i=0; i<n; i++) {
    arr[i] = Math.floor(arr[i]/p);
}
console.log(arr);

/*
class Solution {
    frequencyCount(arr,N,P){
       //code here
       for(let i=0; i<N; i++) {
    arr[i]--;
}
for(let i=0; i<N; i++) {
    if(arr[i]%P < N) {
        arr[arr[i]%P] = arr[arr[i]%P] + P;
    }
}
for(let i=0; i<N; i++) {
    arr[i] = Math.floor(arr[i]/P);
}
return arr;
    }
}
*/