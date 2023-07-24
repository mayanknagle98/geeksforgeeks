/* MICROSOFT, SAMSUNG, SNAPDEAL, 24X7 INNOVATION LABS
=======================================================
Your task is to implement  2 stacks in one array efficiently.

Example 1:

Input:
push1(2)
push1(3)
push2(4)
pop1()
pop2()
pop2()

Output:
3 4 -1

Explanation:
push1(2) the stack1 will be {2}
push1(3) the stack1 will be {2,3}
push2(4) the stack2 will be {4} 
pop1()   the poped element will be 3 
from stack1 and stack1 will be {2}
pop2()   the poped element will be 4 
from stack2 and now stack2 is empty
pop2()   the stack2 is now empty hence -1 .
 

Your Task:
You don't need to read input or print anything. You are required to complete the 4 methods push1, push2 which takes one argument an integer 'x' to be pushed into stack one and two and pop1, pop2 which returns the integer poped out from stack one and two. If no integer is present in the array return -1.
*/

let arr1 = [];
let arr2 = [];
arr1.push(2);
arr1.push(3);
arr2.push(4);
arr1.pop();
arr2.pop();
arr2.pop();

console.log(arr1);
console.log(arr2);
/*
class TwoStacks
{ 
    constructor(){
        this.arr = new Array(100);
        this.size = 100;
        this.top1 = -1;
        this.top2 = 100;
    }

   @param {number} x

    //Function to push an integer into the stack1.
    push1(x){
        // code here
        if (this.top1 < this.top2 - 1) {
            this.top1++;
            this.arr[this.top1] = x;
        }
    }
    
    @param {number} x
    
    //Function to push an integer into the stack2.
    push2(x){
        // code here
         if (this.top1 < this.top2 - 1) {
            this.top2--;
            this.arr[this.top2] = x;
        }
    }
    
    @returns {number}
    
    //Function to remove an element from top of the stack1.
    pop1(){
        // code here
        if (this.top1 >= 0) {
            var x = this.arr[this.top1];
            this.top1--;
            return x;
        } 
        
        return -1;
    }
    
    @returns {number}
    
    //Function to remove an element from top of the stack2.
    pop2(){
        // code here
         if (this.top2 < this.size) {
            var x = this.arr[this.top2];
            this.top2++;
            return x;
        }
        return -1;
    }
}

*/