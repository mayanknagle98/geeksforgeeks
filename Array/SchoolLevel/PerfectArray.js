/*
Given an array of size N and you have to tell whether the array is perfect or not. An array is said to be perfect if its reverse array matches the original array. If the array is perfect then return True else return False.

Example 1:

Input : Arr[] = {1, 2, 3, 2, 1}
Output : PERFECT
Explanation:
Here we can see we have [1, 2, 3, 2, 1] 
if we reverse it we can find [1, 2, 3, 2, 1]
which is the same as before.
So, the answer is PERFECT.

Example 2:

Input : Arr[] = {1, 2, 3, 4, 5}
Output : NOT PERFECT

User Task:
The task is to complete the function IsPerfect(), which takes an array (a), size of the array (n), and returns the boolean value true if it is Perfect else false. The driver will print itself "PERFECT" or "NOT PERFECT" accordingly.
*/

/*
class Solution{
    IsPerfect(arr,n){
        //code here
        let start = 0;
        let end = n-1;
        for(let i=0;i<n;i++){
        if(arr[start]==arr[end]){
        start++;
        end--;
    }
    else{
        return false;
    }
}
return true;
    }
}
*/
let arr = [1,2,3,2,1];
let n = 5;
let start = 0;
let end = n-1;

function perfectArray(arr,n,start,end){
    for(let i=0;i<n;i++){
        if(arr[start]==arr[end]){
            start++;
            end--;
        }
        else{
            console.log("NOT PERFECT");
        }
    }
    console.log("PERFECT");
}
perfectArray(arr,n,start,end)