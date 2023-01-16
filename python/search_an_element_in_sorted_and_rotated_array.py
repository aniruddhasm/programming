'''
Given a sorted and rotated array A of N distinct elements which are rotated at some point, and given an element K. 
The task is to find the index of the given element K in array A.

Example 1:

Input:
N = 9
A[] = {5,6,7,8,9,10,1,2,3}
K = 10
Output: 5
Explanation: 10 is found at index 5.

Example 1:

Input:
N = 3
A[] = {3,1,2}
K = 1
Output: 1

User Task:
Complete Search() function and return the index of the element K if found in the array. If the element is not present, 
then return -1.

Expected Time Complexity: O(log N).
Expected Auxiliary Space: O(1).
'''


def Search(arr, n, k):
    # code here
    l, r = 0, n-1

    while l <= r:
        mid = (l+r)//2
        if arr[mid] == k:
            return mid

        if arr[l] <= arr[mid]:
            if k < arr[l] or k > arr[mid]:
                l = mid+1
            else:
                r = mid - 1
        else:
            if k > arr[r] or k < arr[mid]:
                r = mid - 1
            else:
                l = mid + 1

    return -1
