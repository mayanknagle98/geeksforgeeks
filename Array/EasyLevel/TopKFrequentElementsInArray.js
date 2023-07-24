/* AMAZON, MICROSOFT
======================
Given a non-empty array of integers, find the top k elements which have the highest frequency in the array. If two numbers have the same frequency then the larger number should be given preference. 

Note: Print the elements according to the frequency count (from highest to lowest) and if the frequency is equal then larger number will be given preference.

Example 1:

Input:
N = 6
nums = {1,1,1,2,2,3}
k = 2
Output: {1, 2}

Example 2:

Input:
N = 8
nums = {1,1,2,2,3,3,3,4}
k = 2
Output: {3, 2}

Explanation: Elements 1 and 2 have the
same frequency ie. 2. Therefore, in this
case, the answer includes the element 2
as 2 > 1.

User Task:
The task is to complete the function topK() that takes the array and integer k as input and returns a list of top k frequent elements.
*/
let arr = [1,1,1,2,2,3];
let k = 2;
let v = [];
let mp = new Map();
let ans = [];
for(let i=0; i<arr.length; i++){
    if(mp.has(arr[i])){
        mp.set(arr[i], mp.get(arr[i])+1);
    } else {
        mp.set(arr[i], 1);
    }
}
for(let [key, value] of mp){
    v.push([value, key]);
}
v.sort((a,b) => b[0]-a[0]);
for(let i=0; i<k; i++){
    ans.push(v[i][1]);
}
console.log(ans);

/*
class Solution {
    topK(arr, k) {
        // code here
  let v = [];
let mp = new Map();
let ans = [];
for(let i=0; i<arr.length; i++){
    if(mp.has(arr[i])){
        mp.set(arr[i], mp.get(arr[i])+1);
    } else {
        mp.set(arr[i], 1);
    }
}
for(let [key, value] of mp){
    v.push([value, key]);
}
v.sort((a,b) => b[0]-a[0]);
for(let i=0; i<k; i++){
    ans.push(v[i][1]);
}
return ans;
    }
}
*/