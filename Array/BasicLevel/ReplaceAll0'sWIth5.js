/* AMAZON QUESTION
====================
You are given an integer N. You need to convert all zeroes of N to 5.

Example 1:

Input:
N = 1004
Output: 1554

Explanation: There are two zeroes in 1004
on replacing all zeroes with "5", the new
number will be "1554".

Example 2:

Input:
N = 121
Output: 121

Explanation: Since there are no zeroes in
"121", the number remains as "121".

Your Task:
Your task is to complete the function convertFive() which takes an integer N as an argument and replaces all zeros in the number N with 5. Your function should return the converted number.
*/
let n = 1004;
let ans = 0;

function replaceWithFive(ans, n){
    while(n){
        let rem = n%10;
        if(rem == 0){
            rem = 5;
        }
        ans = ans*10+rem;
        n = Math.floor(n/10);
    }
    n = ans;
    ans = 0;
    while(n){
        let rem = n%10;
        ans = ans*10+rem;
        n=Math.floor(n/10);
    }    
    console.log(ans);
}
replaceWithFive(ans,n);

/*
class Solution {
    
    convertFive(num)
    {
        // code here
        let ans=0;
        while(num){
            let rem = num%10;
            if(rem==0){
                rem=5;
            }
            ans=ans*10+rem;
            num=Math.floor(num/10);
        }
        num=ans;
        ans=0;
        while(num){
            let rem = num%10;
            ans=ans*10+rem;
            num=Math.floor(num/10);
        }
        return ans;
    }
    
}
*/