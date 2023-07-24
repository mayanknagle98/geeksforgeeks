/* ARCESIUM
==============
Given an array A of integers. Find three numbers such that sum of two elements equals the third element and return the triplet in a container result, if no such triplet is found return the container as empty.

Input:
First line of input contains number of testcases. For each testcases there will two lines. First line contains size of array and next line contains array elements.

Output:
For each test case output the triplets, if any triplet found from the array, if no such triplet is found, output -1.

Your Task: Your task is to complete the function to find triplet and return container containing result.

Constraints:
1 <= T <= 100
1 <= N <= 103
0 <= Ai <= 105

Example:
Input:
3
5
1 2 3 4 5
3
3 3 3
6
8 10 16 6 15 25

Output:
1
-1
1

Explanation:
Testcase 1:
Triplet Formed: {2, 1, 3}
Hence 1 
Test Case 2:
Triplet Formed: {}
Hence -1
Test Case 3:
Triplet Formed: {10, 15, 25}
Hence 1
*/
let arr = [1, 2, 3, 4, 5];
let n = 5;

arr.sort((a,b)=>a-b);
for(let i=0;i<n-2;i++){
    for(let j=i+1;j<n-1;j++){
        let sum = arr[i]+arr[j];
        for(let k=j+1;k<n;k++){
            if(arr[k]===sum){
                console.log([arr[i],arr[j],arr[k]]);
            }
        }
    }
}
/*
class Solution{
    findTriplet(arr,n){
        //code here
        arr.sort((a,b)=>a-b);
        for(let i=0;i<n-2;i++){
            for(let j=i+1;j<n-1;j++){
                let sum = arr[i]+arr[j];
                for(let k=j+1;k<n;k++){
                    if(arr[k]===sum){
                        return [arr[i],arr[j],arr[k]];
                    }
                }
            }
        }
        return [];
    }
}
*/