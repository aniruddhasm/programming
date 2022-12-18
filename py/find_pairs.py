'''
Given an array of distinct integers, 
find all the pairs having both negative and positive values of a number in the array.


Example 1:

Input:
n = 8
arr[] = {1,3,6,-2,-1,-3,2,7}
Output: -1 1 -3 3 -2 2
Explanation: 1, 3 and 2 are present 
pairwise positive and negative. 6 and 
7 have no pair.

Example 2:

Input:
n = 3
arr[] = {3,2,1}
Output: 0
Explanation: No such pair exists so the 
output is 0.


Your Task:
You do not need to read input or print anything. 
Complete the function findPairs() which takes the array A[] and the size of the array, n,
 as input parameters and returns a list of integers denoting the pairs. The pair that appears first(i.e. second element of the pair appears first) 
 in A[] should appear first in the returning list and within the pair, the negative integer should appear before the 
 positive integer. Return an empty integer list if no such pair exists.


Expected Time Complexity: O(n)
Expected Auxiliary Space: O(n)
'''



class Solution:
    # Function to return list containing all the pairs having both
    # negative and positive values of a number in the array.
    def findPairs(self, arr, n):
        # code here
        dt = {}
        result = []

        for i in range(n):
            if abs(arr[i]) in dt:
                if (arr[i] < 0):
                    result.append(arr[i])
                    result.append(dt[abs(arr[i])])
                else:
                    result.append(dt[abs(arr[i])])
                    result.append(arr[i])
            else:
                dt[abs(arr[i])] = arr[i]

        return result





# solution 2 shorter version
class Solution:

    def findPairs(self, arr, n):
        result = []
        mdict = {}

        for num in arr:
            if num in mdict or num*-1 in mdict:
                n1 = abs(num)
                result.append(n1*-1)
                result.append(n1)

            mdict[num] = num

        return result
