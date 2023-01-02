'''
Given a number N. The task is to find the Nth catalan number.
The first few Catalan numbers for N = 0, 1, 2, 3, … are 1, 1, 2, 5, 14, 42, 132, 429, 1430, 4862, …
Note: Positions start from 0 as shown above.

Example 1:

Input:
N = 5
Output: 42

Example 2:

Input:
N = 4
Output: 14

Your Task:
Complete findCatalan() function that takes n as an argument and returns the Nth Catalan number. 
The output is printed by the driver code.

Expected Time Complexity: O(N).
Expected Auxiliary Space: O(N).
'''


class Solution:
    # Function to find the nth catalan number.
    def findCatalan(self, n):
        # return the nth Catalan number.

        b = 1

        for i in range(1, n+1, 1):
            b = b*i

        b = b * b

        d = 1

        for i in range(1, 2*n+1, 1):
            d = d * i

        ans = d // b

        ans = ans // (n+1)

        return ans
