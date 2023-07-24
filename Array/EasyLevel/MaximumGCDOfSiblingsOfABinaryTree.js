/* SAMSUNG
============
Given a 2d list that represents the nodes of a Binary tree with N nodes, the task is to find the maximum GCD of the siblings of this tree without actually constructing it.
Note: If there are no pairs of siblings in the given tree, print 0. Also, if given that there's an edge between a and b in the form of {a,b} in the list, then a is the parent node.

Example 1:

Input:
N = 7
arr = {{4, 5}, {4, 2}, {2, 3}, {2, 1}, {3, 6}, {3, 12}}
Output:
6

Explanation:

For the above tree, the maximum GCD
for the sibilings is 6, formed for the
nodes 6 and 12 for the children of node 3.

Example 2:
Input:
N = 3
arr[] = {{1,2}, {1,4}} 
Output :
2

Explanation:

For the above tree, the maximum GCD
for the sibilings is 2, formed for the
nodes 2 and 4 for the children of node 1.

Your Task:  
You don't need to read input or print anything. Your task is to complete the function maxBinTreeGCD() which takes an integer N and a 2-d list denoting the edges as input and returns the maximum GCD of sibilings of the tree.
*/
let arr = [[4, 5],[4, 2],[2, 3],[2, 1],[3,6],[3,12]];
let n= 7;
if(n <= 2) {
    console.log(0);
}
arr.sort();
let ans = 0;
for(let i = 0; i < arr.length-1; i++){
    if(arr[i][0] == arr[i+1][0]){
        ans = Math.max(ans,gcd(arr[i][1],arr[i+1][1]));
    }
}
console.log(ans);

function gcd(a,b){
    if(b == 0) {
        console.log(a);
    };
    console.log(gcd(b,a%b));
}

/*
class Solution {
  maxBinTreeGCD(arr,N){
    //code here
   if(N <= 2) return 0;
arr.sort();
let ans = 0;
for(let i = 0; i < arr.length-1; i++){
    if(arr[i][0] == arr[i+1][0]){
        ans = Math.max(ans,gcd(arr[i][1],arr[i+1][1]));
    }
}
return ans;

function gcd(a,b){
    if(b == 0) return a;
    return gcd(b,a%b);
}

  }
}
*/