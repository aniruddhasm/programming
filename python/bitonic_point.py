'''
Given an array arr of n elements that is first strictly increasing and then maybe strictly decreasing,
 find the maximum element in the array.
Note: If the array is increasing then just print the last element will be the maximum value.

Example 1:

Input:
n = 9
arr[] = {1,15,25,45,42,21,17,12,11}
Output: 45
Explanation: Maximum element is 45.

Example 2:

Input:
n = 5
arr[] = {1, 45, 47, 50, 5}
Output: 50
Explanation: Maximum element is 50.

Your Task:
You don't need to read input or print anything. Your task is to complete the function findMaximum()
which takes the array arr[], and n as parameters and returns an integer denoting the answer.

Expected Time Complexity: O(logn)
Expected Auxiliary Space: O(1)
'''


def findMaximum(self, arr, n):
    # code here
    low = 0
    high = n-1
    m = 0

    while low <= high:
        mid = low + (high-low)//2

        if arr[mid] > m:
            m = arr[mid]
        elif arr[mid-1] > arr[mid]:
            high = mid-1
        else:
            low = mid+1

    return m
