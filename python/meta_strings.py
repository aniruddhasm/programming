'''
Given two strings consisting of lowercase english alphabets, the task is to check whether 
these strings are meta strings or not. Meta strings are the strings which can be made equal by 
exactly one swap in any of the strings. Equal string are not considered here as Meta strings.

Example 1:

Input:
S1 = "geeks", S2 = "keegs"
Output: 1
Explanation: We can swap the 0th and 3rd
character of S2 to make it equal to S1.

Example 2:

Input: 
S1 = "geeks", S2 = "geeks"
Output: 0
Explanation: Equal strings are not considered
Meta strings.


Your Task:
You don't need to read input or print anything. Your task is to complete the function metaStrings() which takes the 
strings S1 and S2 as input and returns true if both the strings are meta strings, else it returns false.


Expected Time Complexity: O(|S|).
Expected Auxiliary Space: O(1).
'''


class Solution:
    def metaStrings(self, S1, S2):
        # code here

        count = 0
        if (S1 == S2):
            return False
        if (set(S1) != set(S2)):
            return False
        if (len(S1) != len(S2)):
            return False
        for i in range(len(S1)):
            if S1[i] != S2[i]:
                count += 1

        if count == 2:
            return True
        return False
