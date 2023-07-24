/* AMAZON
===========
You are given an array Arr of size N. Replace every element with the next greatest element (greatest element on its right side) in the array. Also, since there is no element next to the last element, replace it with -1.

Example 1:

Input:
N = 6
Arr[] = {16, 17, 4, 3, 5, 2}
Output:
17 5 5 5 2 -1

Explanation: For 16 the greatest element 
on its right is 17. For 17 it's 5. 
For 4 it's 5. For 3 it's 5. For 5 it's 2. 
For 2 it's -1(no element to its right). 
So the answer is 17 5 5 5 2 -1

Example 2:

Input:
N = 4
Arr[] = {2, 3, 1, 9}
Output:
9 9 9 -1

Explanation: For each element except 9 the
greatest element on its right is 9.
So the answer is 9 9 9 -1

Your Task:  
You don't need to read input or print anything. Your task is to complete the function nextGreatest() which takes the array of integers arr and n as parameters and returns void. You need to change the array itself.
*/
let arr = [16, 17, 4, 3, 5, 2];
let n = 6;
let largest = arr[n-1];
arr[n-1] = -1;

for(let i=n-2;i>=0;i--){
    let temp = arr[i];
    arr[i] = largest;
    if(largest<temp){
        largest=temp;
    }
}
console.log(arr);

/*
class Solution{
    nextGreatest(arr,n){
        //code here
        let large = arr[n-1];
        arr[n-1] = -1;
        for(let i=n-2;i>=0;i--){
            let temp = arr[i];
            arr[i] = large;
            if(large<temp){
                large = temp;
            }
        }
        return arr;
    }
}

*/