/* FLIPKART, AMAZON, MICROSOFT
=================================
Given a keypad as shown in the diagram, and an N digit number which is represented by array a[ ], the task is to list all words which are possible by pressing these numbers.

Input: N = 3, a[] = {2, 3, 4}

Output:
adg adh adi aeg aeh aei afg afh afi 
bdg bdh bdi beg beh bei bfg bfh bfi 
cdg cdh cdi ceg ceh cei cfg cfh cfi 

Explanation: When we press 2,3,4 then 
adg, adh, adi, ... cfi are the list of 
possible words.

Example 2:

Input: N = 3, a[] = {3, 4, 5}
Output:
dgj dgk dgl dhj dhk dhl dij dik dil 
egj egk egl ehj ehk ehl eij eik eil 
fgj fgk fgl fhj fhk fhl fij fik fil

Explanation: When we press 3,4,5 then 
dgj, dgk, dgl, ... fil are the list of 
possible words.

Your Task:
You don't need to read input or print anything. You just need to complete the function possibleWords() that takes an array a[ ] and N as input parameters and returns an array of all the possible words in lexicographical increasing order.
*/
let arr = [2, 3, 4];
let n = 3;
function ans(a, N, curridx, s, v, mp) {
    if (curridx >= N) {
      v.push(s);
      return;
    }
    let temp = mp[a[curridx]];
    for (let i = 0; i < temp.length; i++) {
      ans(a, N, curridx + 1, s + temp[i], v, mp);
    }
    return;
  }
  let v = [];
  let mp = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  ans(arr, n, 0, "", v, mp);
  console.log(v);

/*
function ans(a, N, curridx, s, v, mp) {
  if (curridx >= N) {
    v.push(s);
    return;
  }
  let temp = mp[a[curridx]];
  for (let i = 0; i < temp.length; i++) {
    ans(a, N, curridx + 1, s + temp[i], v, mp);
  }
  return;
}

class Solution 
{
    //Function to find list of all words possible by pressing given numbers.
    possibleWords(a, N)
    {
        //your code here
         let v = [];
  let mp = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  ans(a, N, 0, "", v, mp);
  return v;
    }
}
*/
