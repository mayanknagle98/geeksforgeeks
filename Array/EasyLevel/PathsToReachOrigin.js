/*
You are standing on a point (n, m) and you want to go to origin (0, 0) by taking steps either left or up i.e. from each point you are allowed to move either in (n-1, m) or (n, m-1). Find the number of paths from point to origin.

Example 1:

Input:

N=3, M=0
Output: 1
Explanation: Path used was - 
(3,0)  --> ( 2,0) --> (1,0) --> (0,0).
We can see that there is no other path
other than this path for this testcase.
 

Example 2:

Input:
N=3, M=6
Output: 84 

Your Task:
Since, this is a function problem. You don't need to take any input, as it is already accomplished by the driver code. You just need to complete the function ways() that takes array N and integer M as parameters and returns the total number of paths from point(n,m) to the origin(0,0) % 1000000007.
*/

function countPaths( n , m) {
    if (n == 0 || m == 0)
        return 1;
    return (countPaths(n - 1, m) + countPaths(n, m - 1));
}
  
    let n = 3, m = 2;
    document.write(" Number of Paths " + countPaths(n, m));

    