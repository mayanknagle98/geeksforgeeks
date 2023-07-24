/* YAHOO
==========
Given an array of size n and a range [a, b]. The task is to partition the array around the range such that array is divided into three parts.
1) All elements smaller than a come first.
2) All elements in range a to b come next.
3) All elements greater than b appear in the end.
The individual elements of three sets can appear in any order. You are required to return the modified array.

Note: The generated output is 1 if you modify the given array successfully.

Example 1:

Input: 
n = 5
A[] = {1, 2, 3, 3, 4}
[a, b] = [1, 2]
Output: 1

Explanation: One possible arrangement is:
{1, 2, 3, 3, 4}. If you return a valid
arrangement, output will be 1.

Example 2:

Input: 
n = 3 
A[] = {1, 2, 3}
[a, b] = [1, 3]
Output: 1

Explanation: One possible arrangement 
is: {1, 2, 3}. If you return a valid
arrangement, output will be 1.

Your Task:
You don't need to read input or print anything. The task is to complete the function threeWayPartition() which takes the array[], a, and b as input parameters and modifies the array in-place according to the given conditions.
*/
let array = [1, 2, 3, 3, 4];
let a = 1;
let b = 2;
let l=-1,h=array.length;
for(let i=0;i<array.length;i++){
    if(array[i] < a){
        l++;
        let temp = array[i];
        array[i] = array[l];  
        array[l] = temp;  
    }
}
for(let i=array.length-1;i>=0;i--){
    if(array[i] > b){
        h--;
        let temp = array[i];
        array[i] = array[h];  
        array[h] = temp;
    }
}

/*
class Solution {
    //Function to partition the array around the range such 
    //that array is divided into three parts.
    threeWayPartition(array, a, b)
    {
        //your code here
       let l=-1,h=array.length;
for(let i=0;i<array.length;i++){
    if(array[i] < a){
        l++;
        let temp = array[i];
        array[i] = array[l];  
        array[l] = temp;  
    }
}
for(let i=array.length-1;i>=0;i--){
    if(array[i] > b){
        h--;
        let temp = array[i];
        array[i] = array[h];  
        array[h] = temp;
    }
}
    }
}
*/