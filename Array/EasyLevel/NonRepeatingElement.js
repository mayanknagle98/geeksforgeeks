/* SNAPDEAL, GOLDMAN SACHS, ADOBE
===================================
Find the first non-repeating element in a given array arr of N integers.
Note: Array consists of only positive and negative integers and not zero.

Example 1:

Input : arr[] = {-1, 2, -1, 3, 2}
Output : 3

Explanation:
-1 and 2 are repeating whereas 3 is 
the only number occuring once.
Hence, the output is 3. 
 
Example 2:

Input : arr[] = {1, 1, 1}
Output : 0

Your Task:
This is a function problem. The input is already taken care of by the driver code. You only need to complete the function firstNonRepeating() that takes an array (arr), sizeOfArray (n), and returns the first non-repeating element. The driver code takes care of the printing.
*/
let arr = [-1, 2, -1, 3, 2];
let n = 5;
let map = new Map();
for(let i=0;i<n;i++){
    map[arr[i]]++;
}
for(let i=0;i<n;i++){
    if(map[arr[i]]==1){
        console.log(arr[i])
    }
}
console.log(0)