'''
Given a string S, find the longest palindromic substring in S. Substring of string S: S[ i . . . . j ]
 where 0 ≤ i ≤ j < len(S). Palindrome string: A string which reads the same backwards. More formally, 
 S is palindrome if reverse(S) = S. Incase of conflict, return the substring which occurs first 
 ( with the least starting index ).


Example 1:

Input:
S = "aaaabbaa"
Output:
aabbaa
Explanation:
The longest palindrome string present in
the given string is "aabbaa".


Your Task:  
You don't need to read input or print anything. Your task is to complete the function longestPalindrome() 
which takes string S as input parameters and returns longest pallindrome present in string.


Expected Time Complexity: O(|S|2)
Expected Auxiliary Space: O(1)
'''

# User function Template for python3


class Solution:
    def longestPalindrome(self, S):
        # code here

        res = ""
        resLen = 0

        for i in range(len(S)):
            # odd length
            l, r = i, i

            while l >= 0 and r < len(S) and S[l] == S[r]:
                if (r-l+1) > resLen:
                    res = S[l:r+1]
                    resLen = (r-l+1)
                l -= 1
                r += 1

            # even length
            l, r = i, i+1

            while l >= 0 and r < len(S) and S[l] == S[r]:
                if (r-l+1) > resLen:
                    res = S[l:r+1]
                    resLen = (r-l+1)
                l -= 1
                r += 1

        return res
