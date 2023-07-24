/* MICROSOFT, AMAZON, GOOGLE
==============================
Given a sorted array with possibly duplicate elements. The task is to find indexes of first and last occurrences of an element X in the given array.

Note: If the element is not present in the array return {-1,-1} as pair.

Example 1:

Input:
N = 9
v[] = {1, 3, 5, 5, 5, 5, 67, 123, 125}
X = 5
Output:
2 5

Explanation:
Index of first occurrence of 5 is 2
and index of last occurrence of 5 is 5.

Example 2:

Input:
N = 9
v[] = {1, 3, 5, 5, 5, 5, 7, 123, 125}
X = 7
Output:
6 6
 
Your Task:  
You don't need to read input or print anything. Your task is to complete the function indexes() which takes the array v[] and an integer X as inputs and returns  the first and last occurrence of the element X. If the element is not present in the array return {-1,-1} as pair.
*/
let arr = [1, 3, 5, 5, 5, 5, 67, 123, 125];
let n = 9;
let x = 5;
let res = [-1, -1];
if (arr.length === 0) 
{
    console.log(res);
}
let start = 0, end = arr.length - 1;
while (start < end) {
  let mid = start + Math.floor((end - start) / 2);
  if (arr[mid] >= x) {
    end = mid;
  } else {
    start = mid + 1;
  }
}
if (arr[start] !== x) {
  console.log(res);
}
res[0] = start;
end = arr.length;
while (start < end) {
  let mid = start + Math.floor((end - start) / 2);
  if (arr[mid] > x) {
    end = mid;
  } else {
    start = mid + 1;
  }
}
res[1] = start - 1;

console.log(res);

/*
class Solution {
    indexes(v, x)
    {
        // code here
        let res = [-1, -1];
if (v.length === 0) return res;
let start = 0, end = v.length - 1;
while (start < end) {
  let mid = start + Math.floor((end - start) / 2);
  if (v[mid] >= x) {
    end = mid;
  } else {
    start = mid + 1;
  }
}
if (v[start] !== x) {
  return res;
}
res[0] = start;
end = v.length;
while (start < end) {
  let mid = start + Math.floor((end - start) / 2);
  if (v[mid] > x) {
    end = mid;
  } else {
    start = mid + 1;
  }
}
res[1] = start - 1;
return res;
    }
}
*/