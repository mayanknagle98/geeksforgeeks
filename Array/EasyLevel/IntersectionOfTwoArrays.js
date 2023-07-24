/* ACCOLITE, AMAZON, MICROSOFT, PAYPAL, ROCKSTAND
====================================================
Given two arrays a[] and b[] respectively of size n and m, the task is to print the count of elements in the intersection (or common elements) of the two arrays.

For this question, the intersection of two arrays can be defined as the set containing distinct common elements between the two arrays. 

Example 1:

Input:
n = 5, m = 3
a[] = {89, 24, 75, 11, 23}
b[] = {89, 2, 4}

Output: 1

Explanation: 
89 is the only element 
in the intersection of two arrays.
Example 2:

Input:
n = 6, m = 5
a[] = {1, 2, 3, 4, 5, 6}
b[] = {3, 4, 5, 6, 7} 

Output: 4

Explanation: 
3 4 5 and 6 are the elements 
in the intersection of two arrays.

Your Task:
You don't need to read input or print anything. Your task is to complete the function NumberofElementsInIntersection() which takes two integers n and m and their respective arrays a[] and b[]  as input. The function should return the count of the number of elements in the intersection.
*/

//Time Exceed
// let a = [1, 2, 3, 4, 5, 6];
// let b = [3, 4, 5, 6, 7];
// let n = 6;
// let m = 5;
// let count=0;
// for(let i=0;i<n;i++){
//     for(let j=0;j<m;j++){
//         if(a[i]==b[j]){
//             count++;
//         }
//     }
// }
// console.log(count);

let a = [1, 2, 3, 4, 5, 6];
let b = [3, 4, 5, 6, 7];
let n = 6;
let m = 5;
const s = new Set();
for(let i=0; i<n; i++){
    s.add(a[i]);
}
let count = 0;
for(let i=0; i<m; i++){
    let key = b[i];
    if(s.has(key)){
        count++;
        s.delete(key);
    }
}
console.log(count);

/*
class Solution {
    // Function to return the count of the number of elements in
    // the intersection of two arrays.
    NumberofElementsInIntersection(a, b, n, m) {
        // code here
        const s = new Set();
for(let i=0; i<n; i++){
    s.add(a[i]);
}
let count = 0;
for(let i=0; i<m; i++){
    let key = b[i];
    if(s.has(key)){
        count++;
        s.delete(key);
    }
}
return count;

    }
}
*/