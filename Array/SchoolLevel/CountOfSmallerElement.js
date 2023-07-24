/*
Given an sorted array A of size N. Find number of elements which are less than or equal to given element X.

Example 1:

Input:
N = 6
A[] = {1, 2, 4, 5, 8, 10}
X = 9
Output:
5

Example 2:

Input:
N = 7
A[] = {1, 2, 2, 2, 5, 7, 9}
X = 2
Output:
4

Your Task:  
You don't need to read input or print anything. Your task is to complete the function countOfElements() which takes the array A[], its size N and an integer X as inputs and returns the number of elements which are less than or equal to given element.

*/
// let arr = [1, 2, 4, 5, 8, 10];
// let n = 6;
// let x = 9;
// let count = 0;
// let i=0;

// for(let i=0;i<n;i++){
//     if(arr[i]<=x){
//         count++;
//     }
// }
// console.log(count)

let arr = [1, 2, 2, 2, 5, 7, 9];
let n = 7;
let x = 2;
let count = 0;
let i=0;
while(i<n && arr[i]<=x){
    count++;
    i++;
}
console.log(count);

/*
class Solution{
    countOfElements(arr,n, x){
        //code here
        let count = 0;
        for(let i=0;i<n;i++){
            if(arr[i]<=x){
                count++;
            }
        }
        return count;
    }
}
*/