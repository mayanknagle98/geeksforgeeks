/* AMAZON
===========
Provided an array Arr of N integers, you need to reverse a subarray of that array. The range of this subarray is given by L and R.

Example 1:

Input:
N = 7
Arr[] = {1, 2, 3, 4, 5, 6, 7}
L = 2, R = 4
Output:
1 4 3 2 5 6 7

Explanation: After reversing the elements 
in range 2 to 4 (2, 3, 4), 
modified array is 1, 4, 3, 2, 5, 6, 7.

Example 2:

Input:
N = 4
Arr[] = {1, 6, 7, 4}
L = 1, R = 4
Output:
4 7 6 1

Explanation: After reversing the elements
in range 1 to 4 (1, 6, 7, 4),
modified array is 4, 7, 6, 1.

Your Task:  
You don't need to read input or print anything. Your task is to complete the function reverseSubArray() which takes the array of integers arr, n, l and r as parameters and returns void. You need to change the array itself.
*/
let arr = [1, 6, 7, 4];
let n = 4;
let l = 1, r = 4;
    l--;
    r--;
    while(l<r){
        let temp = arr[l]; // 2 3 4
        arr[l] = arr[r]; // 4 3 2
        arr[r] = temp; // 2 3 4
        l++; 
        r--;
    }
    console.log(arr);

/*
class Solution{
    reverseSubArray(arr,n,l,r){
        //code here
        l--;
        r--;
        while(l<r){
            let temp = arr[l];
            arr[l] = arr[r];
            arr[r] = temp;
            l++;
            r--;
        }
        return arr;
    }
}
*/