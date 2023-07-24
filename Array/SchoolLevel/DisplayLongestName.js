/* Given a list of names, display the longest name.

Example:

Input:
N = 5
names[] = { "Geek", "Geeks", "Geeksfor",
  "GeeksforGeek", "GeeksforGeeks" }

Output:
GeeksforGeeks

Your Task:  
You don't need to read input or print anything. Your task is to complete the function longest() which takes the array names[] and its size N as inputs and returns the Longest name in the list of names.

*/

// let names = ["Geek", "Geeks", "Geeksfor", "GeeksforGeek", "GeeksforGeeks"]
// let n = 5;
// for(let i=1;i<=n;i++){
//     if(i==1){
//         document.write(names[4]);
//     }
// }

let alpha = ['a', 'ab', 'efghij', 'abc', 'abcd'];
let n = 5;
let size = 0;
let index = 0;

for(let i=0; i<n;i++){
    if(alpha[i].length > size){
        index = i;
        size = alpha[i].length;
    }
}
document.write(alpha[index]);