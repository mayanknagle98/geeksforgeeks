/* Given an array of N distinct elements, the task is to find all elements in array except two greatest elements in sorted order.

Example 1:

Input : 
a[] = {2, 8, 7, 1, 5}
Output :
1 2 5 
Explanation :
The output three elements have two or
more greater elements.   

Your Task:  
You don't need to read input or print anything. Your task is to complete the function findElements() which takes the array A[] and its size N as inputs and return the vector sorted values denoting the elements in array which have at-least two greater elements than themselves.

Set that stores a collection of unique values of any type. To create a new empty Set.
*/

let arr = [2,11,4,7,1,5];

arr.sort((a,b)=>a-b);
let newarr = new Set(arr)
let arr1 = [...newarr];
arr1.pop();
arr1.pop();
arr1.pop();
console.log(arr1);

/*
class Solution {
    findElements(arr,n){
       //code here
     arr.sort((a,b)=>a-b);
     let newarr = new Set(arr);
     let arr1 = [...newarr];
     arr1.pop();
     arr1.pop();
     return arr1;
    }
}
*/