/*
You are given an array of N+2 integer elements. All elements of the array are in the range 1 to N. Also, all elements occur once except two numbers which occur twice. Find the two repeating numbers.

Note: Return the numbers in their order of appearing twice. So, if X and Y are the repeating numbers, and X repeats twice before Y repeating twice, then the order should be (X, Y).

Example 1:

Input:
N = 4
array[] = {1,2,1,3,4,3}
Output: 1 3

Explanation: In the given array, 
1 and 3 are repeated two times.
Example 2:

Input:
N = 2
array[] = {1,2,2,1}
Output: 2 1

Explanation: In the given array,
1 and 2 are repeated two times 
and second occurence of 2 comes 
before 1. So the output is 2 1.

Your Task:
The task is to complete the function repeatedElements() which takes array arr[] and an integer N as inputs (the size of the array is N + 2 and elements are in the range[1, N]) and finds the two repeated element in the array and return them in a list.
*/
let arr = [1,2,1,3,4,3];
let n = 4;
let ans = [];
for(let i=0;i<n+2;i++){
    let index = Math.abs(arr[i]);
   if(arr[index-1]<0){
    ans.push(index)
}
arr[index-1] *=-1;
}
console.log(ans);

/*
class Solution
{
    //Function to find two repeated elements.
    twoRepeated(arr, N)
    {
        //your code here
        let ans = [];
for(let i=0;i<N+2;i++){
    let index = Math.abs(arr[i]);
   if(arr[index-1]<0){
    ans.push(index)
}
arr[index-1] *=-1;
}
return ans;
    }
}
*/