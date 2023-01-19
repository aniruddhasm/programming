/*
Given 2 sorted arrays Ar1 and Ar2 of size N each. 
Merge the given arrays and find the sum of the two middle elements of the merged array.

 

Example 1:

Input:
N = 5
Ar1[] = {1, 2, 4, 6, 10}
Ar2[] = {4, 5, 6, 9, 12}
Output: 11
Explanation: The merged array looks like
{1,2,4,4,5,6,6,9,10,12}. Sum of middle
elements is 11 (5 + 6).

 

Example 2:

Input:
N = 5
Ar1[] = {1, 12, 15, 26, 38}
Ar2[] = {2, 13, 17, 30, 45}
Output: 32
Explanation: The merged array looks like
{1, 2, 12, 13, 15, 17, 26, 30, 38, 45} 
sum of middle elements is 32 (15 + 17).

 

Your Task:
You don't need to read input or print anything. 
Your task is to complete the function findMidSum() which takes 
 ar1, ar2 and n as input parameters and returns the sum of middle elements. 

 

Expected Time Complexity: O(log N)
Expected Auxiliary Space: O(1)
*/


class Solution {
    findMidSum(ar1, ar2, n) {

        let i = 0;
        let j = 0;
        let result = [];

        while (i < n && j < n) {
            if (ar1[i] > ar2[j]) {
                result.push(ar2[j]);
                j++;
            } else {
                result.push(ar1[i]);
                i++;
            }
        }

        while (i < n) {
            result.push(ar1[i]);
            i++;
        }

        while (j < n) {
            result.push(ar2[j]);
            j++;
        }

        let mid = Math.floor(result.length / 2);

        return result[mid] + result[mid - 1];
    }
}