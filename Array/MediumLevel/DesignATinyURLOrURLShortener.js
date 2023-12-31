/* MICROSOFT, HIKE
=====================
Design a system that takes big URLs like “http://www.geeksforgeeks.org/count-sum-of-digits-in-numbers-from-1-to-n/” and converts them into a short URL. It is given that URLs are stored in database and every URL has an associated integer id. So your program should take an integer id and generate a URL. 

A URL character can be one of the following

A lower case alphabet [‘a’ to ‘z’], total 26 characters
An upper case alphabet [‘A’ to ‘Z’], total 26 characters
A digit [‘0′ to ‘9’], total 10 characters
There are total 26 + 26 + 10 = 62 possible characters.

So the task is to convert an integer (database id) to a base 62 number where digits of 62 base are "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMN
OPQRSTUVWXYZ0123456789"

Example 1:

Input: 
N = 12345
Output: 
dnh
12345

Explanation: "dnh" is the url for id 12345

Example 2:

Input: 
N = 30540
Output: 
h6K
30540

Explanation: "h6K" is the url for id 30540

Your Task:  
You don't need to read input or print anything. Your task is to complete the function idToShortURL() which takes the integer n as parameters and returns an string denoting the answer.
*/
// no cases passed...
let n = 12345
let ans = '';
while (n) {
  let rem = n % 62;
  if (rem < 26) {
    ans += String.fromCharCode('a'.charCodeAt(0) + rem);
  } else if (rem >= 26 && rem < 52) {
    rem = rem % 26;
    ans += String.fromCharCode('A'.charCodeAt(0) + rem);
  } else {
    rem = rem % 52;
    ans += String.fromCharCode(rem + 48);
  }
  n = Math.floor(n / 62);
}
ans = ans.split('').reverse().join('');
console.log(ans);
