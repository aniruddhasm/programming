'''
Given a non-negative number represented as a list of digits, add 1 to the number 
(increment the number represented by the digits).
 The digits are stored such that the most significant digit is first element of array.
 

Example 1:

Input: 
N = 3
arr[] = {1, 2, 4}
Output: 
1 2 5
Explanation:
124+1 = 125, and so the Output

Example 2:

Input: 
N = 3
arr[] = {9,9,9}
Output: 
1 0 0 0
Explanation:
999+1 = 1000, and so the output


Your Task:
You don't need to read input or print anything. You only need to complete the function increment() 
that takes an integer N, and an array arr of size N as input and returns a list of integers denoting 
the new number which we get after adding one to the number denoted by the array arr.


Expected Time Complexity:  O(N)
Expected Auxilliary Space: O(1)
'''


class Solution:
    def increment(self, arr, N):
        # code here

        if arr[-1] < 9:
            arr[-1] += 1
            return arr

        s = ''

        for i in arr:
            s += str(i)

        return list(str(int(s)+1))
