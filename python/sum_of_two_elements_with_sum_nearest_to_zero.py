'''
Given an integer array of N elements. You need to find the maximum sum of two elements such that sum is closest to zero.

Example 1:

Input:
N = 3
arr[] = {-8 -66 -60}
Output: -68
Explanation: Sum of two elements closest to 
zero is -68 using numbers -60 and -8.

Example 2:

Input: 
N = 6
arr[] = {-21 -67 -37 -18 4 -65}
Output: -14
Explanation: Sum of two elements closest to
zero is -14 using numbers -18 and 4.

Note : In Case if we have two of more ways to form sum of two elements closest to zero return the maximum sum.


Your Task:
You don't need to read input or print anything. You just need to complete the function closestToZero() 
which takes an array arr[] and its size n as inputs and returns the maximum sum closest to zero that can 
be formed by summing any two elements in the array.


Expected Time Complexity: O(N*logN).
Expected Auxiliary Space: O(1).
'''


def closestToZero(self, arr, n):
    # your code here

    ans = 999999

    # for i in range(n):
    #     for j in range(i+1,n):
    #         val = arr[i]+arr[j]

    #         if abs(val) < abs(ans):
    #             ans = val
    # return ans

    arr.sort()
    l = 0
    r = n-1

    while (l < r):
        val = arr[l]+arr[r]

        if abs(val) < abs(ans):
            ans = val

        if abs(val) == abs(ans):
            ans = max(ans, val)

        if val == 0:
            return 0

        if val < 0:
            l += 1

        if val > 0:
            r -= 1

    return ans
