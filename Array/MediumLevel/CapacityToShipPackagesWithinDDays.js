/* AMAZON, D-E SHAW
======================
Given an array arr[] of N weights. Find the least weight capacity of a boat to ship all weights within D days.
The ith weight has a weight of arr[i]. Each day, we load the boat with weights given by arr[i]. We may not load more weight than the maximum weight capacity of the ship.

Note: You have to load weights on the boat in the given order.

Example 1:

Input:
N = 3
arr[] = {1, 2, 1}
D = 2
Output:
3

Explanation:
We can ship the weights in 2 days
in the following way:-
Day 1- 1,2
Day 2- 1

Example 2:
Input:
N = 3
arr[] = {9, 8, 10}
D = 3
Output:
10

Explanation:
We can ship the weights in 3 days
in the following way:-
Day 1- 9
Day 2- 8
Day 3- 10
 
Your Task:  
You don't need to read input or print anything. Your task is to complete the function leastWeightCapacity() which takes 2 integers N, and D, and an array arr of size N as input and returns the least weight capacity of the boat required.
*/
let arr = [1,2,1];
let N = 3;
let D = 3;
let l = Number.MIN_SAFE_INTEGER;
let sum = 0;
for(let i = 0; i < N; i++){
    sum += arr[i];
    l = Math.max(l, arr[i]);
}
let h = sum;
while(l < h){
    let m = l + Math.floor((h-l)/2);
    let temp = 0; 
    let temp_sum = 0;
    for(let i = 0; i < N; i++){
        temp_sum += arr[i];
        if(temp_sum > m){
            temp++;
            temp_sum = arr[i];
        }
    }
    if(temp_sum <= m){
        temp = temp + 1;
    }
    if(temp <= D){
        h = m;
    }
    else{
        l = m+1;
    }
}
console.log(l)