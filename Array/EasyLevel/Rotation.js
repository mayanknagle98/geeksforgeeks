/* FLIPKART, AMAZON, ABCO
============================
Given an ascending sorted rotated array Arr of distinct integers of size N. The array is right rotated K times. Find the value of K.

Example 1:

Input:
N = 5
Arr[] = {5, 1, 2, 3, 4}
Output: 1

Explanation: The given array is 5 1 2 3 4. 
The original sorted array is 1 2 3 4 5. 
We can see that the array was rotated 
1 times to the right.

Example 2:

Input:
N = 5
Arr[] = {1, 2, 3, 4, 5}
Output: 0

Explanation: The given array is not rotated.

Your Task:
Complete the function findKRotation() which takes array arr and size n, as input parameters and returns an integer representing the answer. You don't to print answer or take inputs.
*/
let arr = [1, 2, 3, 4, 5];
let n = 5;
let left=0, right=n-1;
        while(left<right){
            let mid=Math.floor(left+(right-left)/2);
            if(arr[mid]>=arr[0]){
                left=mid+1;
            }
            else if(arr[mid]<arr[0]){
                right=mid;
            }
        }
        if(arr[left]<arr[0]){
            console.log(left)
        }
        console.log(0);

/*
class Solution {
    findKRotation(arr,n) {
        // code here 
        let left=0, right=n-1;
        while(left<right){
            let mid=Math.floor(left+(right-left)/2);
            if(arr[mid]>=arr[0]){
                left=mid+1;
            }
            else if(arr[mid]<arr[0]){
                right=mid;
            }
        }
        if(arr[left]<arr[0]){
            return left
        }
        return 0;
    }
}
*/