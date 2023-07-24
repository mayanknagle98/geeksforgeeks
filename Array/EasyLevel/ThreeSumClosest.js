/*
Given an array, Arr of N numbers, and another number target, find three integers in the array such that the sum is closest to the target. Return the sum of the three integers.

Note: If there are multiple solutions, print the maximum one.

Example 1:

Input:
N = 6, target = 2
A[] = {-7,9,8,3,1,1}
Output: 2

Explanation: There is one triplet with sum
2 in the array. Triplet elements are -7,8,
1 whose sum is 2.

Example 2:

Input:
N = 4, target = 13
A[] = {5,2,7,5}
Output: 14

Explanation: There is one triplet with sum
12 and other with sum 14 in the array.
Triplet elements are 5, 2, 5 and 2, 7, 5
respectively. Since abs(13-12) ==
abs(13-14) maximum triplet sum will be
preferred i.e 14.

Your Task:
Complete threeSumClosest() function and return the expected answer.
*/
let arr = [-7,9,8,3,1,1];
let n = 6;
let target = 2;
let ans=-1;
        arr.sort((a,b)=>a-b);
        let diff=Number.MAX_VALUE;
        for(let i=0;i<n-2;i++){
            let low=i+1;
            let high=n-1;
            while(low<high){
                let sum=(arr[i]+arr[low]+arr[high])
                if(sum==target){
                    console.log(target);
                }
                else if(sum<target){
                    if(Math.abs(target-sum)<diff){
                        ans=sum;
                        diff=Math.abs(target-sum)
                    }
                    low++;
                }
                else{
                    if(Math.abs(target-sum)<=diff){
                        ans=sum;
                        diff=Math.abs(target-sum)
                    }
                    high--;
                }
            }
        }
        console.log(ans);