/* Given an integer array arr of size n, you need to sum the elements of arr?

Example 1:

Input:
n = 3
arr[] = {3 2 1}
Output: 6

Your Task:
You need to complete the function sumElement() that takes arr and n and returns the sum. The printing is done by the driver code.

class Solution {
  sumElement(arr,n) {
      // code here
    let sum =0;
    for(let i=0;i<n;i++){
        sum = sum+ arr[i];
    }
    return sum;
  }
}
*/