/*
Given an array A[]  of n elements. Your task is to complete the Function num which returns an integer denoting the total number of times digit k appears in the whole array.

For Example:

Input:
A[] = {11,12,13,14,15}, k=1
Output:
6 
Explanation: Here digit 1 appears in the whole array 6 times.

Your Task:
You don't need to read input or print anything. Complete the function Num() which accepts an integer N and array A as input parameter and return the desired output.
*/
let arr = [11,12,13,14,15];
let k = 1;
let n = 5;
let count = 0;
k = k.toString();
for(let i=0;i<n;i++){
    let str = arr[i].toString();
    for(let j=0;j<str.length;j++){
        if(str[j].includes(k)){
            count++;
        }
    }
}
console.log(count);

/*
class Solution{
    num(A,n,k){
        //code here
    let count = 0;
    k = k.toString();
    for(let i = 0; i < n; i++){
     let str = A[i].toString();
         for(let j = 0; j < str.length; j++){
          if(str[j].includes(k)){
            count++;
        }
    }
}
return count;
    }
}
*/