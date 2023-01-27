'''
Given a string S and an integer K. In one operation, you are allowed to choose any character of the string and 
change it to any other uppercase English character.You can perform this operation atmost K times.
Return the length of the longest substring containing same letter you can get after performing the above operations.
Note : S consists of only uppercase English letters.

Example 1:
Input :
S = "ABBA"
K = 2
Output: 4
Explanation: Replace the 2 occurrences of 'A' with 2 'B's or vice-versa.

Example 2:
Input :
S = "AABAABB"
k = 2
Output: 6
Explanation: Replace the occurrence of 'B' with 'A' and form "AAAAAAB".
The substring "AAAAAA" has the most extended repeating letters, which is 6.

 

Your task :

You don't have to read input or print anything. Your task is to complete the function characterReplacement() 
which takes the string S and integer K as input and returns the longest substring containing same letter after 
performing specified operations.

 

Expected Time Complexity : (|S|)

Expected Auxiliary Space : O(1)
'''


class Solution:
    def characterReplacement(self, S, K):
        # Code here

        count = {}
        res = 0

        l = 0
        for r in range(len(S)):
            count[S[r]] = 1+count.get(S[r], 0)

            while (r-l+1) - max(count.values()) > K:
                count[S[l]] -= 1
                l += 1

            res = max(res, r-l+1)

        return res
