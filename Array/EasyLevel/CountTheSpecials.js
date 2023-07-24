/*
Given an array A (may contain duplicates) of N elements and a positive integer K. The task is to count the number of elements that occurs exactly floor(N/K) times in the array.

Example:

Input:N = 5 K = 2 
A[] = 1 4 1 2 4
Output:2

Explanation:In the given array, 1 and 4 occurs floor(5/2) = 2 times.
So count is 2.

Your Task:
Your task is to complete the function countSpecials() which should count the elements which occur exactly floor(N/K) times.
*/
let arr = [1, 4, 1, 2, 4];
let n = 5;
let k = 2;
const f = Math.floor(n/k);
let cnt = 0;
const mp = new Map();
for(let i=0; i<n; i++){
    if(!mp.has(arr[i])){
        mp.set(arr[i], 1);
    }else{
        mp.set(arr[i], mp.get(arr[i])+1);
    }
}
for(let [key, value] of mp){
    if(value === f){
        cnt++;
    }
}
console.log(cnt);

/*
class Solution {
    countSpecials(arr,sizeOfArr,K){
        //code here
        const f = Math.floor(sizeOfArr/K);
let cnt = 0;
const mp = new Map();
for(let i=0; i<sizeOfArr; i++){
    if(!mp.has(arr[i])){
        mp.set(arr[i], 1);
    }else{
        mp.set(arr[i], mp.get(arr[i])+1);
    }
}
for(let [key, value] of mp){
    if(value === f){
        cnt++;
    }
}
return cnt;
    }
}
*/