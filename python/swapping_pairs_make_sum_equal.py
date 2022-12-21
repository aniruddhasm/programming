'''
Given two arrays of integers A[] and B[] of size N and M, the task is to check if a pair of values 
(one value from each array) exists such that swapping the elements of the pair will make the sum of two arrays equal.

 

Example 1:

Input: N = 6, M = 4
A[] = {4, 1, 2, 1, 1, 2}
B[] = (3, 6, 3, 3)
Output: 1
Explanation: Sum of elements in A[] = 11
Sum of elements in B[] = 15, To get same 
sum from both arrays, we can swap following 
values: 1 from A[] and 3 from B[]

Example 2:

Input: N = 4, M = 4
A[] = {5, 7, 4, 6}
B[] = {1, 2, 3, 8}
Output: 1
Explanation: We can swap 6 from array 
A[] and 2 from array B[]

Your Task:
This is a function problem. You don't need to take any input, as it is already accomplished by the driver code. 
You just need to complete the function findSwapValues() that takes array A, array B, integer N, and integer M 
as parameters and returns 1 if there exists any such pair otherwise returns -1.

 

Expected Time Complexity: O(MlogM+NlogN).
Expected Auxiliary Space: O(1).
'''


class Solution:
    def findSwapValues(self, a, n, b, m):
        # Your code goes here

        sum_a = sum(a)
        sum_b = sum(b)

        diff = sum_b - sum_a
        if sum_a > sum_b:
            diff = sum_a - sum_b

        if diff == 0:
            return 1

        if sum_b >= sum_a:
            for i in set(b):
                if ((2*i)-diff)/2 in a:
                    return 1
            return -1
        else:
            for i in set(a):
                if ((2*i)-diff)/2 in b:
                    return 1
            return -1
