/* AMAZON
===========
We are given an array of integers and a range, we need to find whether the subarray which falls in this range has values in the form of a mountain or not. All values of the subarray are said to be in the form of a mountain if either all values are increasing or decreasing or first increasing and then decreasing. More formally a subarray [a1, a2, a3 … aN] is said to be in form of a mountain if there exists an integer K, 1 <= K <= N such that,
a1 <= a2 <= a3 .. <= aK >= a(K+1) >= a(K+2) …. >= aN
You have to process Q queries. In each query you are given two integer L and R, denoting starting and last index of the subarrays respectively.

Example 1:

Input:
N = 8
a[] = {2,3,2,4,4,6,3,2}
Q = 2
Queries = (0,2), (1,3)

Output:
Yes
No

Explanation: For L = 0 and R = 2, a0 = 2,
a1 = 3 and a2 = 2, since they are in the
valid order,answer is Yes.
For L = 1 and R = 3, a1 = 3, a2 = 2 and
a3 = 4, since a1 > a2 and a2 < a4 the
order isn't valid, hence the answer is
No.

Your Task:

Complete the function processQueries() which takes the array, size of array queries and number of queries as parameter. It should return a vector/ArrayList/array (depending upon language cpp/Java/Python) of boolean values, true if the subarray is in mountain form, false otherwise. The driver code will print "Yes" if the returned value is true, otherwise "No".
*/

/* // output difference 
function mountain(arr, l, r){
     let inc = true;
for(let i=l+1; i<=r; i++){
    if(arr[i] >= arr[i-1]){
        if(!inc){
            if(arr[i] !== arr[i-1]){
                return "No";
            }
        }
    }
    else{
        inc = "No";
    }
}
return "Yes";
 }
 
class Solution {
    processQueries(arr, n, queries, q){
        // code here
     const ans = [];
for(let i=0; i<q; i++){
    const l = queries[i].l;
    const r = queries[i].r;
    ans.push(mountain(arr, l, r));
}
return ans;
    }
}
*/