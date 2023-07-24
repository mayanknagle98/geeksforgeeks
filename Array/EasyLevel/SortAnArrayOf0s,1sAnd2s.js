/* PAYTM, FLIPKART, MORGAN STANLEY, AMAZON, MICROSOFT, OYO ROOMS, SAMSUNG, SNAPDEAL, HIKE, MAKEMYTRIP, OLA CABS, WALMART, MAQSOFTWARE, ADOBE, YATRA.COM, SAP LABS, QUALCOMM.
=========================================================================================

Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order.

Example 1:

Input: 
N = 5
arr[]= {0 2 1 2 0}
Output:
0 0 1 2 2

Explanation:
0s 1s and 2s are segregated 
into ascending order.

Example 2:

Input: 
N = 3
arr[] = {0 1 0}
Output:
0 0 1

Explanation:
0s 1s and 2s are segregated 
into ascending order.

Your Task:
You don't need to read input or print anything. Your task is to complete the function sort012() that takes an array arr and N as input parameters and sorts the array in-place.
*/
let arr = [0, 1, 0];
let n = 3;
// for(let i=0;i<n;i++){
//     for(let j=0;j<n;j++){
//         if(arr[j]>arr[j+1]){
//             let temp = arr[j];
//             arr[j] = arr[j+1];
//             arr[j+1] = temp;
//         }
//     }
// }
// console.log(arr);
let numberOfOnes = 0;
let numberOfTwos = 0;
for (let i = 0; i < n; i++) {
if (arr[i] === 1) numberOfOnes++;
if (arr[i] === 2) numberOfTwos++;
}
for (let i = 0; i < n; i++) {
if (i < (n - (numberOfOnes + numberOfTwos))) arr[i] = 0;
else if (i < (n - numberOfTwos)) arr[i] = 1;
else arr[i] = 2;
}
console.log(arr);

/*
class Solution {    
    sort012(arr, N)
    {
        //your code here
      let numberOfTwos = 0;
      let numberOfOnes = 0;
for (let i = 0; i < N; i++) {
    if (arr[i] === 1) numberOfOnes++;
    if (arr[i] === 2) numberOfTwos++;
}
for (let i = 0; i < N; i++) {
    if (i < (N - (numberOfOnes + numberOfTwos))) arr[i] = 0;
    else if (i < (N - numberOfTwos)) arr[i] = 1;
    else arr[i] = 2;
}
    }
}
*/