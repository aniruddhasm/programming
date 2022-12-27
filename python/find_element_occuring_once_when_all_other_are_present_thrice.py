'''
Given an array of integers arr[] of length N, every element appears thrice except for one which occurs once.
Find that element which occurs once.


Example 1:

Input:
N = 4
arr[] = {1, 10, 1, 1}
Output:
10
Explanation:
10 occurs once in the array while the other
element 1 occurs thrice.

Example 2:

Input:
N = 10
arr[] = {3, 2, 1, 34, 34, 1, 2, 34, 2, 1}
Output:
3
Explanation:
All elements except 3 occurs thrice in the array.

 

Your Task:
The task is to complete the function singleElement() which finds and returns the element occuring once in the array.


Constraints:
1 ≤ N ≤ 106
-109 ≤ A[i] ≤ 109


Expected Time Complexity: O(N).
Expected Auxiliary Space: O(1).

'''


class Solution:
    def singleElement(self, arr, N):
        # code here

        ones, twos = 0, 0

        for i in range(N):
            ones = (ones ^ arr[i]) & ~twos
            twos = (twos ^ arr[i]) & ~ones

        return ones
