'''
Given a string, find the minimum number of characters to be inserted to convert it to palindrome.
For Example:
ab: Number of insertions required is 1. bab or aba
aa: Number of insertions required is 0. aa
abcd: Number of insertions required is 3. dcbabcd


Example 1:

Input: str = "abcd"
Output: 3
Explanation: Inserted character marked
with bold characters in dcbabcd

Example 2:

Input: str = "aa"
Output: 0
Explanation:"aa" is already a palindrome.


Your Task:
You don't need to read input or print anything. Your task is to complete the function 
countMin() which takes the string str as inputs and returns the answer.

Expected Time Complexity: O(N2), N = |str|
Expected Auxiliary Space: O(N2)

'''


class Solution:
    def countMin(self, Str):
        # code here

        len1, str2 = len(Str), Str[::-1]

        dp = [[0 for i in range(len1+1)] for i in range(len1+1)]

        for i in range(1, len1+1):
            for j in range(1, len1+1):
                if Str[i-1] == str2[j-1]:
                    dp[i][j] = dp[i-1][j-1] + 1
                else:
                    dp[i][j] += max(dp[i-1][j], dp[i][j-1])

        return len1-dp[len1][len1]
