/*
Your friend loves magic and he has coined a new term - "Magical number". To perform his magic, he needs that Magic number. There are N number of people in the magic show, seated according to their ages in ascending order. A magical number is that seat no. where the person has the same age as that of the given seat number.
Help your friend in finding out that "Magical number".
Note: If there are multiple magical numbers in the array, return the any one valid value.

Example:

Input:
1
10
-10 -1 0 3 10 11 30 50 100 150

Output:
3

Input:
The first line of input contains an integer T denoting the number of test cases.
The first line of each test case is N, size of an array.
The second line of each test case contains N input A[].

Output:

Print "Magical Number"
Print "-1" when the index value does not match with the value. 
*/
let arr = [-10, -1, 0, 3, 10, 11, 30, 50, 100, 150];
let n = 10; 
let low = 0;
let high = n-1;

while(low<=high){
    let m = Math.floor((low+high)/2);
    if(arr[m]==m){
        console.log(m);
    }
    arr[ m ] < m ? low = ++m : high = --m;
}
console.log(-1);

/*
class Solution{
    binarySearch(arr,low, high){
        //code here
while(low<=high){
    let m = Math.floor((low+high)/2);
    if(arr[m]==m){
        return m;
    }
    arr[ m ] < m ? low = ++m : high = --m;
}
return -1;
    }
}
*/