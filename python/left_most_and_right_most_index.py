'''
iven a sorted array with possibly duplicate elements.
 The task is to find indexes of first and last occurrences of an element X in the given array.

Note: If the element is not present in the array return {-1,-1} as pair.

 

Example 1:

Input:
N = 9
v[] = {1, 3, 5, 5, 5, 5, 67, 123, 125}
X = 5
Output:
2 5
Explanation:
Index of first occurrence of 5 is 2
and index of last occurrence of 5 is 5.

Example 2:

Input:
N = 9
v[] = {1, 3, 5, 5, 5, 5, 7, 123, 125}
X = 7
Output:
6 6

 

Your Task: 
You don't need to read input or print anything. Your task is to complete the function indexes() 
which takes the array v[] and an integer X as inputs and returns  the first and last occurrence of the element X.
 If the element is not present in the array return {-1,-1} as pair.

Can you solve the problem in expected time complexity?


Expected Time Complexity: O(Log(N))
Expected Auxiliary Space: O(1)
'''


class Solution:
    def indexes(self, v, x):
        # Your code goes here

        result = []
        result.append(self.first_occurance(v, x))
        result.append(self.last_occurance(v, x))
        return result

    def first_occurance(self, v, x):
        start = 0
        end = len(v) - 1
        ans = -1

        while (start <= end):
            mid = (start + end)//2
            if v[mid] == x:
                ans = mid
                end = mid - 1
            elif v[mid] > x:
                end = mid - 1
            else:
                start = mid + 1

        return ans

    def last_occurance(self, v, x):
        start = 0
        end = len(v) - 1
        ans = -1

        while (start <= end):
            mid = (start+end)//2
            if v[mid] == x:
                ans = mid
                start = mid + 1
            elif v[mid] > x:
                end = mid - 1
            else:
                start = mid + 1

        return ans
