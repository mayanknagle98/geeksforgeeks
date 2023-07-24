/* GOLDMAN SACHS
===================
There are n trees in a forest. The heights of the trees is stored in array tree[], where tree[i] denotes the height of the ith tree in the forest. If the ith tree is cut at a height H, then the wood collected is tree[i] - H, provided tree[i] > H. If the total woods that needs to be collected is exactly equal to k, find the height H at which every tree should be cut (all trees have to be cut at the same height). If it is not possible then return -1 else return H.

Example 1:

Input:
n = 5, k = 4
tree[] = {2, 3, 6, 2, 4}
Output: 3

Explanation: Wood collected by cutting trees
at height 3 = 0 + 0 + (6-3) + 0 + (4-3) = 4
hence 3 is to be subtracted from all numbers.
Since 2 is lesser than 3, nothing gets
subtracted from it.

Example 2:

Input:
n = 6, k = 8
tree[] = {1, 7, 6, 3, 4, 7}
Output: 4

Explanation: Wood collected by cutting trees
at height 4 = 0+(7-4)+(6-4)+0+0+(7-4) = 8

Your Task:
Your task is to complete the function find_height(). This function takes the array tree[ ], and the integers n and k as input parameters and returns the height at which trees have to be cut. If no positive integer value of height is possible, return -1.
*/
let tree = [2, 3, 6, 2, 4];
let n = 5;
let k = 4;
let max = tree[0];
let wood = 0;
for(let i=1; i<n; i++){
    if(tree[i] > max){
        max = tree[i];
    }
}
let low = 0, high = max;
while(low <= high){
    let mid = Math.floor((low + high) / 2);
    for(let i=0; i<n; i++){
        if(tree[i] >= mid){
            wood += (tree[i] - mid);
        }
    }
    if(wood == k){
        console.log(mid);
    }
    else if(wood < k){
        high = mid - 1;
    }
    else{
        low = mid + 1;
    }
    wood = 0;
}
console.log(-1);

/*
class Solution {
    find_height(tree, n, k) {
        //code here
        let max = tree[0];
let wood = 0;
for(let i=1; i<n; i++){
    if(tree[i] > max){
        max = tree[i];
    }
}
let low = 0, high = max;
while(low <= high){
    let mid = Math.floor((low + high) / 2);
    for(let i=0; i<n; i++){
        if(tree[i] >= mid){
            wood += (tree[i] - mid);
        }
    }
    if(wood == k){
        return mid;
    }
    else if(wood < k){
        high = mid - 1;
    }
    else{
        low = mid + 1;
    }
    wood = 0;
}
return -1;
    }
}

*/
