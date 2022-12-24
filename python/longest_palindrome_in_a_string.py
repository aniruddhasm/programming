'''
Given a string S, find the longest palindromic substring in S. Substring of string S: S[ i . . . . j ] 
where 0 ≤ i ≤ j < len(S). Palindrome string: A string which reads the same backwards. 
More formally, S is palindrome if reverse(S) = S. Incase of conflict, 
return the substring which occurs first ( with the least starting index).


Example 1:

Input:
S = "aaaabbaa"
Output: aabbaa
Explanation: The longest Palindromic
substring is "aabbaa".

Example 2:

Input: 
S = "abc"
Output: a
Explanation: "a", "b" and "c" are the 
longest palindromes with same length.
The result is the one with the least
starting index.


Your Task:
You don't need to read input or print anything. Your task is to complete the function longestPalin() 
which takes the string S as input and returns the longest palindromic substring of S.


Expected Time Complexity: O(|S|2).
Expected Auxiliary Space: O(1).
'''


class Solution:
    def longestPalin(self, S):
        # code here
        n = len(S)

        start = 0
        end = 0
        for i in range(n):
            l, r = self.LP(i, i, S, n)
            if (r-l) > (end-start):
                end = r
                start = l

            l, r = self.LP(i, i+1, S, n)
            if (r-l) > (end-start):
                end = r
                start = l

        return S[start:end]

    def LP(self, l, r, S, n):
        while r < n and l >= 0:
            if S[l] != S[r]:
                break
            l -= 1
            r += 1
        return l+1, r
