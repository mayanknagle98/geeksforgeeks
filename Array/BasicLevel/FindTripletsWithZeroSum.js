/* AMAZON, GOOGLE, FACEBOOK
=============================
Given an array arr[] of n integers. Check whether it contains a triplet that sums up to zero. 

Note: Return 1, if there is at least one triplet following the condition else return 0.

Example 1:

Input: n = 5, arr[] = {0, -1, 2, -3, 1}
Output: 1

Explanation: 0, -1 and 1 forms a triplet
with sum equal to 0.

Example 2:

Input: n = 3, arr[] = {1, 2, 3}
Output: 0

Explanation: No triplet with zero sum exists. 

Your Task:
You don't need to read input or print anything. Your task is to complete the boolean function findTriplets() which takes the array arr[] and the size of the array (n) as inputs and print 1 if the function returns true else print 0 if the function returns false. 
*/
let arr = [0, -1, 2, -3, 1];
let n = 5;
// let sum = 0;
// for(let i=0;i<n;i++){
//     for(let j=0;j<3;j++){
//         sum = sum+arr[j];
//         if(sum==0){
//             console.log(1)
//         }
//         else{
//             console.log(0)
//         }
//     }
// }

arr.sort((a, b) => a - b);

for (let i=0;i<n-2;i++){
          let j=i+1;
          let k=n-1;
          while (j<k){
              if (arr[i]+arr[j]+arr[k]==0){
                return true;
            }
                else if (arr[i]+arr[j]+arr[k]>0){
                    --k;
                }
                else{
                    ++j;
                }
            }
        }
        return false;

/*
class Solution {
    //Function to find triplets with zero sum.
    findTriplets(arr, n)
    {
        //your code here
        arr.sort((a, b) => a - b);
 for (let i=0;i<n-2;i++){
           let j=i+1;
           let k=n-1;
           while (j<k){
               if (arr[i]+arr[j]+arr[k]==0){
                   return true;
               }
               else if (arr[i]+arr[j]+arr[k]>0){
                   --k;
               }
               else{
                   ++j;
               }
           }
       }
       return false;
    }
}
*/