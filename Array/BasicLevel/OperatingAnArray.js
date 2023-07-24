/*
Given an array A of size N, your task is to do some operations, i.e., search an element x, insert an element y at index yi, and delete an element z by completing the functions. Also, all functions should return a boolean value.

Note: 

In delete operation return true even if element is not present.
N is never greater than 10000.
Input Format:
N
A1 A2 . . . An
x y yi z

Example:
Input:
5
2 4 1 0 6
1 2 2 0

Output:
1 1 1
Your Task:
Since this is a function problem, you only need to complete the provided functions.
*/

// 6
// 801 661 730 878 305 320  
// 736 444 0 522
// output - 0 1 1

/*
class Solution {
    
    searchEle(a,x){
        //Your code here
       let count=0;
for(let i=1;i<=100;i++)
{
if(a[i]==x)
{
return true;
count++;
}
}
if(count==0)
return false;
    }

    insertEle(a,y,yi){
        //Your code here
          let count=0;
let temp=a[yi];
a[yi]=y;
for(let i=yi+1;i<=100;i++)
{
a[i]=temp;
temp=a[i+1];
}
if(a[yi]==y)
{
return true;
}
else
return false;
    }

    deleteEle(a,z){
        //Your code here
        let count=0;
for(let i=1;i<=100;i++)
{
if(a[i]==z)
{
for(let j=i;j<100;j++)
{
a[i]=a[i+1];
}
}
}

for(let i=1;i<=100;i++)
{
if(a[i]==z)
{
count++;
}

}
if(count==0)
return true;
else
return false;
    }
}
*/