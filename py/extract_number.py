'''
Given a sentence containing several words and numbers. 
Find the largest number among them which does not contain 9.

Example 1:

Input:
Sentence="This is alpha 5057 and 97"
Output:
5057
Explanation:
5057 is the only number that does
not have a 9.

Example 2:

Input:
Sentence="Another input 9007"
Output:
-1
Explanation:
Since there is no number that
does not contain a 9,output is -1.

Your task:
You don't need to read input or print anything. 
Your task is to complete the function ExtractNumber() 
which takes a string S as input parameter and returns the largest number that does not contain a 9.
 If no such number exists, return -1.

Expected Time Complexity:O(N)
Expected Auxillary Space:O(1)
'''


class Solution:
    def ExtractNumber(self, S):
        # code here

        arr = S.split(' ')
        nums = []

        for i in arr:
            if i.isnumeric():
                if i.find('9') == -1:
                    nums.append(i)

        ans = -1
        for i in nums:
            ans = max(ans, int(i))

        return ans
