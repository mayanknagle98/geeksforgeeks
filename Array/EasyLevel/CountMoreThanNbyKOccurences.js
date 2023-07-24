/* AMAZON
============
Given an array arr[] of size N and an element k. The task is to find all elements in array that appear more than n/k times.

Example 1:

Input:
N = 8
arr[] = {3,1,2,2,1,2,3,3}
k = 4
Output: 2

Explanation: In the given array, 3 and
 2 are the only elements that appears 
more than n/k times.

Example 2:

Input:
N = 4
arr[] = {2,3,3,2}
k = 3
Output: 2

Explanation: In the given array, 3 and 2 
are the only elements that appears more 
than n/k times. So the count of elements 
are 2.

Your Task:
The task is to complete the function countOccurence() which returns count of elements with more than n/k times appearance.
*/
let arr = [2,3,3,2]; 
let n = 4;
let k = 3;
arr.sort(); 
let count = 1;
let c = 0;
let num = Math.floor(n/k); 
for(let i=0; i<n; i++) {
    if(arr[i] === arr[i+1]) { 
        count++; 
        if(count === num+1) { 
            c++; 
        }
    } else {
        count = 1;
    }
}
console.log(c);

/*
class Solution
{
    //Function to find all elements in array that appear more than n/k times.
    countOccurence(arr, n, k)
    {
        //your code here
        arr.sort((a,b)=>a-b);
        let count = 1;
        let c = 0;
        let num = Math.floor(n/k);
        for(let i=0;i<n;i++){
            if(arr[i]===arr[i+1]){
                count++;
                if(count===num+1){
                    c++;
                }
            }
            else{
                count = 1;
            }
        }
        return c;
    }
}
*/
