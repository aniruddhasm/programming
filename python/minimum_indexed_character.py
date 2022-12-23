'''
Given a string str and another string patt. Find the minimum index of the character in str 
that is also present in patt.


Example 1:

Input:
str = geeksforgeeks
patt = set
Output: 1
Explanation: e is the character which is
present in given str "geeksforgeeks"
and is also presen in patt "set". Minimum
index of e is 1. 

Example 2:

Input:
str = adcffaet
patt = onkl
Output: -1
Explanation: There are none of the
characters which is common in patt
and str.


Your Task:
You only need to complete the function minIndexChar() that returns the index of answer in str or returns -1 
in case no character of patt is present in str.


Expected Time Complexity: O(N).
Expected Auxiliary Space: O(Number of distinct characters).
'''


class Solution:

    # Function to find the minimum indexed character.
    def minIndexChar(self, Str, pat):
        # code here
        for i in range(len(Str)):
            if Str[i] in pat:
                return i

        return -1
