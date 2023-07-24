/*
Given an array Arr of size N, swap the Kth element from beginning with Kth element from end.

Example 1:

Input:
N = 8, K = 3
Arr[] = {1, 2, 3, 4, 5, 6, 7, 8}
Output: 1 2 6 4 5 3 7 8
Explanation: Kth element from beginning is
3 and from end is 6.
Example 2:

Input:
N = 5, K = 2
Arr[] = {5, 3, 6, 1, 2}
Output: 5 1 6 3 2
Explanation: Kth element from beginning is
3 and from end is 1.

Your Task:
You don't need to read input or print anything. Your task is to complete the function swapKth() which takes the array of integers arr, n and k as parameters and returns void. You have to modify the array itself.

*/
let arr = [5, 3, 6, 1, 2];
let n = 5;
let k = 2;
// swap k=3 means arr[2] swap with arr[5];

function swap(){
    let temp = arr[k-1];
        arr[k-1] = arr[n-k];
        arr[n-k] = temp;
        console.log(arr);
}
swap();

/*
class Solution{
    swapKth(arr,n,k){
        //code here
       
        let temp = arr[k-1];
        arr[k-1] = arr[n-k];
        arr[n-k] = temp;
    }
}
*/