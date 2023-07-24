/* Given a Integer array A[] of n elements. Your task is to complete the function PalinArray. Which will return 1 if all the elements of the Array are palindrome otherwise it will return 0.

Example 1:
Input:
5
111 222 333 444 555
Output:
1

Explanation:
A[0] = 111 //which is a palindrome number.
A[1] = 222 //which is a palindrome number.
A[2] = 333 //which is a palindrome number.
A[3] = 444 //which is a palindrome number.
A[4] = 555 //which is a palindrome number.
As all numbers are palindrome so This will return 1

*/
// class Solution {
//     constructor(){
//         this.check=this.check.bind(this);
//     }
//      PalinArray(arr,n){     
//          //code here
//          let count=0;
//          for(let i=0;i<n;i++){
//              if(this.check(arr[i]) == 1){
//                 count++;
//              }
//          } 
//          if(count==n) return 1;
//          return 0;
         
//      }
//      check=(num)=>{
//          // console.log(num);
//          let orinial_Num=num;
//          let rev =0;
//         while(num!=0){
//             rev = (rev*10)+(num%10);
//             num=parseInt(num/10);
//         }
//         if(orinial_Num==rev){
//             return 1;
//         }else{
//             return 0;
//         }
         
//      }   
 
//  }

class Solution {
    
    PalinArray(arr,n){
        //code here
        const palindrome = (num) => {
            let start = 0, end = num.length - 1;
            while(start < end) {
                if(num[start] !== num[end]) return false;
                start++;
                end--;
            }
            return true;
        }
        for(let num of arr) {
            num = `${num}`;
            if(!palindrome(num)) return 0;
        }
        return 1;
    }
}