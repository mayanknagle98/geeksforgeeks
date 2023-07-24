/* FLIPKART, AMAZON, MICROSOFT, VMWARE, CITRIX
=================================================
Given K sorted arrays arranged in the form of a matrix of size K*K. The task is to merge them into one sorted array.
Example 1:

Input:
K = 3
arr[][] = {{1,2,3},{4,5,6},{7,8,9}}
Output: 1 2 3 4 5 6 7 8 9

Explanation:Above test case has 3 sorted
arrays of size 3, 3, 3
arr[][] = [[1, 2, 3],[4, 5, 6], 
[7, 8, 9]]
The merged list will be 
[1, 2, 3, 4, 5, 6, 7, 8, 9].

Example 2:

Input:
K = 4
arr[][]={{1,2,3,4},{2,2,3,4},
         {5,5,6,6},{7,8,9,9}}
Output:
1 2 2 2 3 3 4 4 5 5 6 6 7 8 9 9 

Explanation: Above test case has 4 sorted
arrays of size 4, 4, 4, 4
arr[][] = [[1, 2, 2, 2], [3, 3, 4, 4],
[5, 5, 6, 6], [7, 8, 9, 9 ]]
The merged list will be 
[1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 
6, 6, 7, 8, 9, 9].

Your Task:
You do not need to read input or print anything. Your task is to complete mergeKArrays() function which takes 2 arguments, an arr[K][K] 2D Matrix containing K sorted arrays and an integer K denoting the number of sorted arrays, as input and returns the merged sorted array ( as a pointer to the merged sorted arrays in cpp, as an ArrayList in java, and list in python)
*/
let arr = [[1,2,3],[4, 5, 6],[7, 8, 9]];
let k = 3;
let ans = [];
for(let i=0;i<k;i++){
    for(let j=0;j<k;j++){
       ans.push(arr[i][j])
    }
}
ans.sort((a,b)=>a-b);
console.log(ans);

/*
class Solution {
    mergeKArrays(arr,K){
        //code here
        let ans = [];
for(let i=0;i<K;i++){
    for(let j=0;j<K;j++){
       ans.push(arr[i][j])
    }
}
ans.sort((a,b)=>a-b);
return ans;
    }
}
*/