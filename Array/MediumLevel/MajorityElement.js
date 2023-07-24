/* FLIPKART, AMAZON, ACCOLITE, MICROSOFT, D-E SHAW, GOOGLE, NAGARRO, ATLASSIAN
==================================================================================
Given an array A of N elements. Find the majority element in the array. A majority element in an array A of size N is an element that appears more than N/2 times in the array.
 
Example 1:

Input:
N = 3 
A[] = {1,2,3} 
Output:
-1

Explanation:
Since, each element in 
{1,2,3} appears only once so there 
is no majority element.

Example 2:

Input:
N = 5 
A[] = {3,1,3,3,2} 
Output:
3

Explanation:
Since, 3 is present more
than N/2 times, so it is 
the majority element.

Your Task:
The task is to complete the function majorityElement() which returns the majority element in the array. If no majority exists, return -1.
*/
let a = [3,1,3,3,2];
let size = 5;
let count=1;
let index=0;
let freq=0;
for(let i=1;i<size;i++){
    if(a[i]==a[index]){
        count++;
    }
    else{
        count--;
    }
    if(count<=0){
        count=1;
        index=i;
    }
}
for(let i=0;i<size;i++){
    if(a[i]==a[index]){
        freq++;
    }
}
if(freq>size/2){
console.log(a[index])
}
console.log(-1);

/*
class Solution {
    
    majorityElement(a, size)
    {
        //your code here
        let count=1;
let index=0;
let freq=0;
for(let i=1;i<size;i++){
    if(a[i]==a[index]){
        count++;
    }
    else{
        count--;
    }
    if(count<=0){
        count=1;
        index=i;
    }
}
for(let i=0;i<size;i++){
    if(a[i]==a[index]){
        freq++;
    }
}
if(freq>size/2){
return a[index];
}
return -1;
    }
}
*/