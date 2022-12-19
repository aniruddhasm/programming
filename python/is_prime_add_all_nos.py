'''
Given a positive integer N, find the sum of all prime numbers between 1 and N(inclusive).
 

Example 1:

Input: N = 5
Output: 10
Explanation: 2, 3, and 5 are prime
numbers between 1 and 5(inclusive).

Example 2:

Input: N = 10
Output: 17
Explanation: 2, 3, 5 and 7 are prime
numbers between 1 and 10(inclusive).

 

Your Task:
You don't need to read or print anyhting. Your task is to complete the function prime_Sum() 
which takes N as input parameter and returns the sum of all primes between 1 and N(inclusive).
 

Expected Time Complexity: O(N*log(N))
Expected Space Complexity: O(N)
'''

import math
class Solution:
	def prime_Sum(self, n):
		# Code here
		def is_prime(m):
		    if m==2:
		        return True
		    for i in range(2,int(math.sqrt(m))+1):
		        if m%i==0:
		            return False
		    else:
		        return True
		        
		sum = 0
		if n == 0 or n == 1:
            return 0
        else:
            for i in range(2, n + 1):
                if(is_prime(i)):
                    sum += i
            return sum