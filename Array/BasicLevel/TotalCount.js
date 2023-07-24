/* ZOHO
=========
Given an array Arr of N positive integers and a number K where K is used as a threshold value to divide each element of the array into sum of different numbers. Find the sum of count of the numbers in which array elements are divided.

Example 1:

Input:
N = 4, K = 3
Arr[] = {5, 8, 10, 13}
Output: 14

Explanation: Each number can be expressed as sum 
of different numbers less than or equal to K as
5 (3 + 2), 8 (3 + 3 + 2), 10 (3 + 3 + 3 + 1), 
13 (3 + 3 + 3 + 3 + 1). So, tm ohe suf count 
of each element is (2+3+4+5)=14.

Example 2:

Input:
N = 5, K = 4
Arr[] = {10, 2, 3, 4, 7}
Output: 8

Explanation: Each number can be expressed as sum of
different numbers less than or equal to K as
10 (4 + 4 + 2), 2 (2), 3 (3), 4 (4) and 7 (4 + 3).
So, the sum of count of each element is 
(3 + 1 + 1 + 1 + 2) = 8.

Your Task:
You don't need to read input or print anything. Your task is to complete the function totalCount() which takes the array of integers arr and n as parameters and returns an integer denoting the answer.
*/
let arr = [5, 8, 10, 13];
let n = 4;
let k = 3;
let count=0;
        for(let i=0;i<n;i++){
            while(arr[i]>0){
                if(arr[i]<=k){
                    count++;
                    break;
                }
                else{
                    arr[i]=arr[i]-k;
                    count++;
                }
            }
        }
console.log(count);
/*
class Solution {

    totalCount(arr,n,k){
        //code here
       let count=0;
        for(let i=0;i<n;i++){
            while(arr[i]>0){
                if(arr[i]<=k){
                    count++;
                    break;
                }
                else{
                    arr[i]=arr[i]-k;
                    count++;
                }
            }
        }
        return count;
    }
}
*/