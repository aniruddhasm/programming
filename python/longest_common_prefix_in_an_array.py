'''
Given a array of N strings, find the longest common prefix among all strings present in the array.


Example 1:

Input:
N = 4
arr[] = {geeksforgeeks, geeks, geek,
         geezer}
Output: gee
Explanation: "gee" is the longest common
prefix in all the given strings.

Example 2:

Input: 
N = 2
arr[] = {hello, world}
Output: -1
Explanation: There's no common prefix
in the given strings.


Your Task:
You don't need to read input or print anything. Your task is to complete the function 
longestCommonPrefix() which takes the string array arr[] and its size N as inputs and returns 
the longest common prefix common in all the strings in the array. If there's no prefix 
common in all the strings, return "-1".


Expected Time Complexity: O(N*max(|arri|)).
Expected Auxiliary Space: O(max(|arri|)) for result.
'''


class Solution:
    def longestCommonPrefix(self, arr, n):
        # code here
        min_length_word = min(arr, key=len)
        min_prefix = ''

        for i in range(len(min_length_word)):
            current_char = arr[0][i]
            for value in arr:
                if value[i] != current_char:
                    return min_prefix if min_prefix != '' else '-1'
            min_prefix += current_char

        return min_prefix
