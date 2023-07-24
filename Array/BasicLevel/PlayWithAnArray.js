/*
Given an unsorted array arr of size N, rearrange the elements of array such that number at the odd index is greater than the number at the previous even index. The task is to complete the function formatArray() which will return formatted array.

NOTE:
If the returned array formed is according to rules, 1 will be printed else 0 will be printed.

Example 1:

Input:
n = 5
arr[] = {5, 4, 3, 2, 1}
Output: 1

Explanation:
The given array after modification
will be as such: 4 5 2 3 1.

Example 2:

Input:
n = 4
arr[] = {4, 3, 2, 1}
Output: 1

User task:

Since this is a functional problem you don't have to worry about the input, you just have to complete the function formatArray(), which accepts array arr and its size
*/
let arr = [4,3,2,1];
let n = 4;
let t;
    for(let i=0;i<n;i=i+2)
    {
        if(i+1<n)
        {
        if(arr[i]>arr[i+1])
        {
            t=arr[i];
            arr[i]=arr[i+1];
            arr[i+1]=t;
        }
        }
}
console.log(arr);

/*
class Solution{
    formatArray(arr,n){
        //code here
        let t;
        for(let i=0;i<n;i=i+2){
            if(i+1<n){
                if(arr[i]>arr[i+1]){
                    t = arr[i];
                    arr[i] = arr[i+1];
                    arr[i+1] = t;
                }
            }
        }
        return arr;
    }
}
*/