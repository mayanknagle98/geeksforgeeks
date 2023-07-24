/* FLIPKART
=============
Jarvis is weak in computing palindromes for Alphanumeric characters.
While Ironman is busy fighting Thanos, he needs to activate sonic punch but Jarvis is stuck in computing palindromes.
You are given a string S containing alphanumeric characters. Find out whether the string is a palindrome or not.
If you are unable to solve it then it may result in the death of Iron Man.

Example 1:

â€‹Input : S = "I am :IronnorI Ma, i"
Output : YES

Explanation:
Ignore all the symbol and whitespaces S = "IamIronnorIMai".
Now, Check for pallandrome ignoring uppercase and lowercase
english letter.

â€‹Example 2:

Input : S = Ab?/Ba 
Output :  YES 
 
Your Task:
This is a function problem. The input is already taken care of by the driver code. You only need to complete the function saveIronman() that takes an string (ch), and return the true if the string is a palindrome and false if the string is not a palindrome. The driver code takes care of the printing.
*/
let s= "Ab?/Ba"
let res = "";
for(let i=0; i<s.length;i++)
{
    if((s[i]>='a' && s[i]<='z') || (s[i]>='A' && s[i]<='Z') || (s[i]>='0' &&s[i]<='9'))
    {
        res+=s[i].toLowerCase();
    }
}
let ans=res;
res = res.split("").reverse().join("");
if(ans===res)
{
    console.log(true);
}
else
{
    console.log(false);
}

/*
class Solution{
    saveIronman(s){
        //code here
        let res = "";
for(let i=0; i<s.length;i++)
{
    if((s[i]>='a' && s[i]<='z') || (s[i]>='A' && s[i]<='Z') || (s[i]>='0' &&s[i]<='9'))
    {
        res+=s[i].toLowerCase();
    }
}
let ans=res;
res = res.split("").reverse().join("");
if(ans===res)
{
    return true;
}
else
{
    return false;
}
    }
}
*/