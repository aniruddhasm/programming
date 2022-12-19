'''
Given an integer N.Create a string using only lowercase characters from a to z that follows the given rules.

When N is even:

Use N/2 characters from the beginning of a-z and N/2 characters from the ending of a-z.

When N is greater than 26,continue repeating the instructions until length of string becomes N.

When N is odd:

Case 1: If the sum of digits of N is even, Select (N+1)/2 characters from the beginning of a-z and 
(N-1)/2 characters from the ending of a-z.

Case 2: If the sum of digits of N is odd, Select (N-1)/2 characters from the beginning of a-z and 
(N+1)/2 characters from the ending of a-z.

When N is greater than 26,continue repeating the instructions until length of string becomes N.

 

Example 1:

Input: 
N=21
Output: 
abcdefghijpqrstuvwxyz
Explanation:
Since 21 is odd and sum of digits
of 21 is also odd,we take (21-1)/2=10 
characters from the beginning and 
(21+1)/2=11 characters from the 
end of a-z.

Example 2:

Input:
N=28 
Output: 
abcdefghijklmnopqrstuvwxyzaz
Explanation: 
Since 28>26, we keep repeating 
the process until length of string becomes 
28.

 

Your Task:
You don't need to read input or print anything. 
Your task is to complete the function BalancedString() which takes the integer N as input parameter and
 returns the string created using given procedures.
 

Expected Time Complexity: O(N)
Expected Auxiliary Space: O(1)
'''

class Solution:
    _ALPHABETS = "abcdefghijklmnopqrstuvwxyz"
        
    def _sum_of_digits(self, num):
        res = 0;
        while(num>0):
            res += num % 10;
            num //= 10;
        
        return res;
        
    def BalancedString(self,N):
        res = [self._ALPHABETS *( N // 26), None, None];
        og_N, N=N, N%26
        
        if not N:
            return res[0]
        
        count = ((N  >> 1) + ((og_N & 1) * (1-self._sum_of_digits(og_N) & 1)))
        
        res[1] = self._ALPHABETS[:count];
        res[2] = self._ALPHABETS[26-N+count:]
        
        return "".join(res);