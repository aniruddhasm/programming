'''
Given an array Arr of size N such that each element is from the range 0 to 9. 
Find the minimum possible sum of two numbers formed using the elements of the array.
All digits in the given array must be used to form the two numbers.


Example 1:

Input:
N = 6
Arr[] = {6, 8, 4, 5, 2, 3}
Output: 604
Explanation: The minimum sum is formed 
by numbers 358 and 246.


Example 2:

Input:
N = 5
Arr[] = {5, 3, 0, 7, 4}
Output: 82
Explanation: The minimum sum is 
formed by numbers 35 and 047.


Your Task:
You don't need to read input or print anything. Your task is to complete the function solve() 
which takes arr[] and n as input parameters and returns the minimum possible sum. 
As the number can be large, return string presentation of the number without leading zeroes.
 

Expected Time Complexity: O(N*logN)
Expected Auxiliary Space: O(1)
'''


class Solution:
    def solve(self, arr, n):
        # code here

        arr.sort()
        even = 0
        odd = 0

        for i in range(n):
            if i & 1:
                even = even*10 + arr[i]
            else:
                odd = odd*10 + arr[i]

        return even+odd
