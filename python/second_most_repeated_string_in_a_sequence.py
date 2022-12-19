'''
Given a sequence of strings, the task is to find out the second most repeated 
(or frequent) string in the given sequence.

Note: No two strings are the second most repeated, there will be always a single string.

Example 1:

Input:
N = 6
arr[] = {aaa, bbb, ccc, bbb, aaa, aaa}
Output: bbb
Explanation: "bbb" is the second most 
occurring string with frequency 2.

â€‹Example 2:

Input: 
N = 6
arr[] = {geek, for, geek, for, geek, aaa}
Output: for
Explanation: "for" is the second most
occurring string with frequency 2.


Your Task:
You don't need to read input or print anything. Your task is to complete the function secFrequent() 
which takes the string array arr[] and its size N as inputs and returns the second most frequent string in the array.


Expected Time Complexity: O(N*max(|Si|).
Expected Auxiliary Space: O(N*max(|Si|).
'''

class Solution:
    def secFrequent(self, arr, n):
        # code here
        dt = {}
        
        for i in arr:
            if i in dt:
                dt[i] += 1
            else:
                dt[i] = 1
                
        first = 0;
        second = 0;
        for key, value in dt.items():
            first = max(value, first)
            
        for key, value in dt.items():
            if(value < first):
                second = max(value, second)
        
        for key, value in dt.items():
            if(value == second):
                return key;
        
        return "";