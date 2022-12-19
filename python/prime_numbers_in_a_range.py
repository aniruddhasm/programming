'''
Given two integers M and N, generate all primes between M and N including M and N.

Example 1:

Input:
M=1,N=10
Output:
2 3 5 7
Explanation:
The prime numbers between 1 and 10
are 2,3,5 and 7.

Example 2:

Input:
M=2, N=5
Output:
2,3,5
Explanation:
The prime numbers between 2 and 5 are 
2,3 and 5.


Your Task:
You don't need to read input or print anything. 
Your task is to complete the function primeRange() which takes 
2 integer inputs M and N and returns a list of all primes between M and N including N and M.


Expected Time Complexity:O(N*sqrt(N))
Expected Auxillary Space:O(1)
'''
import math


class Solution:

    def isPrime(self, N):
        if N == 0 or N == 1:
            return 0
        for i in range(2, int(math.sqrt(N)) + 1):
            if (N % i == 0):
                return 0
        return 1

    def primeRange(self, M, N):
        # code here
        ans = []
        for i in range(M, N+1):
            if self.isPrime(i):
                ans.append(i)

        return ans
