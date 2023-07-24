/*
This is a functional problem. Your task is to return the product of array elements under a given modulo.
The modulo operation finds the remainder after the division of one number by another. For example, K(mod(m))=K%m= remainder obtained when K is divided by m

Example:

Input:
1
4
1 2 3 4

Output:
24

Input:
The first line of input contains T denoting the number of test cases. Then each of the T lines contains a single positive integer N denotes the number of elements in the array. The next line contains 'N' integer elements of the array.

Output:
Return the product of array elements under a given modulo.
That is, return (Array[0]*Array[1]*Array[2]...*Array[n])%modulo.
*/
let arr = [1,2,3,4];
let ans = 1;
let mod = 1;
for(let x of arr){
    ans *= (x % mod);
    if(ans >= mod){
        ans %= mod;
    }
}
console.log(ans);
/*
class Solution {
    product(arr, n,mod){
        //code here
        let ans = 1;
for(let x of arr){
    ans *= (x % mod);
    if(ans >= mod){
        ans %= mod;
    }
}
return ans;

    }
}
 */