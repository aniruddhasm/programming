'''
Given an array arr[] of size N of distinct elements and a number X, 
find if there is a pair in arr[] with product equal to X.

Example 1:

Input:
N = 4, X = 400
arr[] = {10, 20, 9, 40}
Output: Yes
Explanation: As 10 * 40 = 400.


Example 2:

Input:
N = 4, X = 30
arr[] = {-10, 20, 9, -40}
Output: No
Explanation: No pair with product 30.


Your Task:
You don't need to read input or print anything. Your task is to complete the function isProduct() 
which takes the arr[], n and x as input parameters and returns an boolean value denoting the answer.


Expected Time Complexity: O(N)
Expected Auxiliary Space: O(N)
'''


class Solution:
    def isProduct(self, arr, n, x):
        # code here

        d = {}

        for i in range(n):
            if arr[i] in d:
                return True
            elif arr[i] != 0:
                if x % arr[i] == 0:
                    d[x//arr[i]] = 1

        return False
