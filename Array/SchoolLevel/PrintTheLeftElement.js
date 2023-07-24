/*
Given a array of length N, at each step it is reduced by 1 element. In the first step the maximum element would be removed, while in the second step minimum element of the remaining array would be removed, in the third step again the maximum and so on. Continue this till the array contains only 1 element. And find the final element remaining in the array.

Example 1:

Input:
N = 7
A[] = {7, 8, 3, 4, 2, 9, 5}
Ouput: 
5

Explanation:
In first step '9' would be removed, in 2nd step
'2' will be removed, in third step '8' will be
removed and so on. So the last remaining
element would be '5'.  
Max = 9 8 7 
Min = 2 3 4


Example 2:

Input:
N = 8
A[] = {8, 1, 2, 9, 4, 3, 7, 5}
Ouput:
4

Explanation:
In first step '9' would be removed, in 2nd step
'1' will be removed, in third step '8' will be
removed and so on. So the last remaining
element would be '4'.  
Max = 9 8 7 5
Min = 1 2 3

Your Task:  
You don't need to read input or print anything. Your task is to complete the function leftElement() which takes the array A[] and its size N as inputs and returns the final remaining element in the array.

*/

let arr = [7, 8, 3, 4, 2, 9, 5];
let n = 7;

function avg (arr,n){
 arr.sort((a,b)=>a-b);
   if(n%2==0){
   console.log(arr[parseInt((n/2)-1)])
}
else{
    console.log(arr[parseInt((n/2))])
   }
}
avg(arr,n)


// class Solution {
//     leftElement(arr, n) {
//       //code here
//       arr.sort((a,b)=>a-b)
//       let s = 0;
//       let e = n-1;
//       for(let i=0;i<n-1;i++){
//           if(i%2==0){
//               e--;
//           }
//           else{
//               s++;
//           }
//       }
//       return arr[e];
//     }
//   }

/*
class Solution {
    leftElement(arr, n) {
      //code here
      arr.sort((x, y) => x - y);
if (n % 2 === 0) {
  return arr[Math.floor(n / 2) - 1];
}
return arr[Math.floor(n / 2)];
    }
  }
*/