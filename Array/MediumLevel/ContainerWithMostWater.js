/* FLIPKART, AMAZON, GOOGLE
=============================
Given N non-negative integers a1,a2,....an where each represents a point at coordinate (i, ai). N vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i,0). Find two lines, which together with x-axis forms a container, such that it contains the most water.

Note : In Case of single verticle line it will not be able to hold water.

Example 1:

Input:
N = 4
a[] = {1,5,4,3}
Output: 6

Explanation: 5 and 3 are distance 2 apart.
So the size of the base = 2. Height of
container = min(5, 3) = 3. So total area
= 3 * 2 = 6.

Example 2:

Input:
N = 5
a[] = {3,1,2,4,5}
Output: 12

Explanation: 5 and 3 are distance 4 apart.
So the size of the base = 4. Height of
container = min(5, 3) = 3. So total area
= 4 * 3 = 12.

Your Task :
You only need to implement the given function maxArea. Do not read input, instead use the arguments given in the function and return the desired output.
*/
let arr = [3,1,2,4,5];
let n = 5;
let left=0;
let right=n-1;
let ans =0;
    while(left<right){
        let tempwater=Math.min(arr[left],arr[right])*(right-left);
        ans=Math.max(ans,tempwater);
        if(arr[left]<arr[right]){
            left++;
        }
        else{
            right--;
        }
    }
    console.log(ans);

/*
class Solution {
    maxArea(arr, n){
        // code here
let left=0;
let right=n-1;
let ans =0;
    while(left<right){
        let tempwater=Math.min(arr[left],arr[right])*(right-left);
        ans=Math.max(ans,tempwater);
        if(arr[left]<arr[right])left++;
        else{
            right--;
        }
    }
    return ans;
    }
}
*/