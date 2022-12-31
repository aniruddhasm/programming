'''
Given a string in roman no format (s)  your task is to convert it to an integer.
 Various symbols and their values are given below.
I 1
V 5
X 10
L 50
C 100
D 500
M 1000

Example 1:

Input:
s = V
Output: 5

Example 2:

Input:
s = III 
Output: 3

Your Task:
Complete the function romanToDecimal() which takes a string as input parameter and returns the equivalent decimal number. 

Expected Time Complexity: O(|S|), |S| = length of string S.
Expected Auxiliary Space: O(1)

'''


class Solution:
    def romanToDecimal(self, S):
        # code here

        d = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000}
        l = list()

        S = S.replace('IV', 'IIII').replace('IX', 'VIIII')
        S = S.replace('XL', 'XXXX').replace('XC', 'LXXXX')
        S = S.replace('CD', 'CCCC').replace('CM', 'DCCCC')

        for i in S:
            l.append(d[i])

        return sum(l)
