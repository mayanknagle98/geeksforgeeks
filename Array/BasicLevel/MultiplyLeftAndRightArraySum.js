/*
Pitsy needs help with the given task by her teacher. The task is to divide an array into two sub-array (left and right) containing n/2 elements each and do the sum of the subarrays and then multiply both the subarrays.

Note: If the length of the array is odd then the right half will contain one element more than the left half.

Example 1:

Input : arr[ ] = {1, 2, 3, 4}
Output : 21

Explanation:
Sum up an array from index 0 to 1 = 3
Sum up an array from index 2 to 3 = 7
Their multiplication is 21.

Example 2:

Input : arr[ ] = {1, 2} 
Output :  2 
 
Your Task:
This is a function problem. The input is already taken care of by the driver code. You only need to complete the function multiply() that takes an array (arr), sizeOfArray (n), and return the sum of the subarrays and then multiply both the subarrays. The driver code takes care of the printing
*/
let arr = [1, 2, 3];
let n = 3;
let sum1=0;
let sum2=0;
let result;
let x = Math.floor(n/2);
for(let i=0;i<x;i++){
    sum1=sum1+arr[i];
}
for(let j=x;j<n;j++){
    sum2=sum2+arr[j];
}
result=sum1*sum2;
console.log(result);

/*
class Solution {
    multiply(arr,n){
       //code here
       let sum1=0;
       let sum2=0;
       let result;
       let x=Math.floor(n/2);
       for(let i=0;i<n;i++){
    if(i<x){
        sum1=sum1+arr[i];
    }
    else{
        sum2=sum2+arr[i];
    }
}
result = sum1*sum2;
       return result;
    }
}
*/