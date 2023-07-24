/*
Given an array of distinct elements which was initially sorted. This array may be rotated at some unknown point. The task is to find the minimum element in the given sorted and rotated array. 

Example 1:

Input:
N = 10
arr[] = {2,3,4,5,6,7,8,9,10,1}
Output: 1

Explanation: The array is rotated 
once anti-clockwise. So minimum 
element is at last index (n-1) 
which is 1.

Example 2:

Input:
N = 5
arr[] = {3,4,5,1,2}
Output: 1

Explanation: The array is rotated 
and the minimum element present is
at index (n-2) which is 1.

Your Task:
The task is to complete the function minNumber() which takes the array arr[] and its starting and ending indices (low and high) as inputs and returns the minimum element in the given sorted and rotated array.
*/
let arr = [2,3,4,5,6,7,8,9,10,1];
let n = 5;
let mid;
let low = 0;
let high = n-1;
while(low<=high){
    mid = Math.floor((high-low)/2);
    if(arr[mid]>arr[high]){
        low = mid+1;
    }
    else if(arr[mid]<arr[low]){
        high = mid;
    }
    else{
        console.log(arr[low]);
    }
    low++;
    high--;
}


/*
class Solution
{
    //Function to find the minimum element in sorted and rotated array.
    minNumber(arr, low, high)
    {
        //your code here
        let mid;
while(low <= high) {
  mid = low + Math.floor((high - low) / 2);
  if(arr[mid] > arr[high]) {
    low = mid + 1;
  } else if(arr[mid] < arr[low]) {
    high = mid;
  } else {
    return arr[low];
  }
}
    }
}
*/