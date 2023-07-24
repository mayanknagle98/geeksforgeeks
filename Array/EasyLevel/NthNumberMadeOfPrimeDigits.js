/*
Given a number 'N'. The task is to find the Nth number whose each digit is a prime number i.e 2, 3, 5, 7. In other words you have to find nth number of this sequence : 2, 3, 5, 7, 22, 23 ,.. and so on.

Example 1:

Input:
N = 10
Output: 33

Explanation:10th number in the sequence of
numbers whose each digit is prime is 33.

Example 2:

Input:
N = 21
Output: 222

Explanation:21st number in the sequence of
numbers whose each digit is prime is 222.

Your Task:
Complete primeDigits function and return the nth number of the given sequence made of prime digits.
*/
let n = 21;
let res = '';
while(n){
    let k = n%4;
    if(k === 1){
        res += '2';
    }else if(k === 2){
        res += '3';
    }else if(k === 3){
        res += '5';
    }else{
        res += '7';
    }
    n--;
    n = Math.floor(n/4);
}
res = res.split('').reverse().join('');
console.log(parseInt(res));

/*
class Solution 
{
    //Function to find nth number made of only prime digits.
    primeDigits(n)
    {
        // code here
        let res = '';
        while(n){
            let k = n%4;
            if(k===1){
                res = res+'2';
            }
            else if(k===2){
                res = res+'3';
            }
            else if(k===3){
                res = res+'5';
            }
            else{
                res = res+'7';
            }
            n--;
            n = Math.floor(n/4);
        }
        res = res.split('').reverse().join('');
        return parseInt(res);
    }
}
*/
