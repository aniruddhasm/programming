'''
Given a list of words followed by two words, the task to find the minimum distance 
between the given two words in the list of words


Example 1:

Input:
S = { "the", "quick", "brown", "fox", 
     "quick"}
word1 = "the"
word2 = "fox"
Output: 3
Explanation: Minimum distance between the 
words "the" and "fox" is 3

Example 2:

Input:
S = {"geeks", "for", "geeks", "contribute", 
     "practice"}
word1 = "geeks"
word2 = "practice"
Output: 2
Explanation: Minimum distance between the
words "geeks" and "practice" is 2


Your Task: 
You don't need to read input or print anything. Your task is to complete the function
shortestDistance() which list of words, two strings as inputs and returns the minimum 
distance between two words

Expected Time Complexity: O(|S|)
Expected Auxiliary Space: O(1)
'''


class Solution:
    def shortestDistance(self, s, word1, word2):
        # code here

        k = 0
        l = 0
        count = 0
        minn = 1000000

        for i in range(len(s)):
            if s[i] == word1:
                k = i
                count += 1

            if s[i] == word2:
                l = i
                count += 1

            if count >= 2:
                p = abs(l-k)
                minn = min(minn, p)

        return minn
