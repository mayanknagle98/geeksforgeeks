/* ACCOLITE, AMAZON
=====================
Given an array Arr of size N, the array contains numbers in range from 0 to K-1 where K is a positive integer and K <= N. Find the maximum repeating number in this array. If there are two or more maximum repeating numbers return the element having least value.

Example 1:

Input:
N = 4, K = 3
Arr[] = {2, 2, 1, 2}
Output: 2

Explanation: 2 is the most frequent
element.

Example 2:

Input:
N = 6, K = 3
Arr[] = {2, 2, 1, 0, 0, 1}
Output: 0

Explanation: 0, 1 and 2 all have same
frequency of 2.But since 0 is smallest,
you need to return 0.

Your Task:
You don't need to read input or print anything. Your task is to complete the function maxRepeating() which takes the array of integers arr, n and k as parameters and returns an integer denoting the answer.
*/
let arr = [0,2,1,3,5];
let n = 5;
let k = 5;
arr.sort((x,y)=>x-y);
    let max = 0;
    let num = -1;
    let count = 0;
       for(let i=1;i<n;i++){
           if(arr[i]==arr[i-1]){
               count++;
           }else{
               if(count>max){
                   max = count;
                   num = arr[i-1];
               }
               count = 0;
           }
           if(count>max){
               max = count;
               num = arr[i-1];
           }
       }
      console.log(num);

/*
class Solution{
    maxRepeating(arr,n,k){
        //code here
        arr.sort((a,b)=>a-b);
        let max = 0, num = -1, count = 0;
        for(let i=1;i<n;i++){
            if(arr[i]==arr[i-1]){
                count++;
            }
            else{
                if(count>max){
                    max=count;
                    num=arr[i-1];
                }
                count=0;
            }
            if(count>max){
                max=count;
                num=arr[i-1];
            }
        }
        return num;       
    }
}
*/