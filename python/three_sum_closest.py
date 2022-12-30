'''
Given an array, Arr of N numbers, and another number target, find three integers in the array 
such that the sum is closest to the target. Return the sum of the three integers.

Note: If there are multiple solutions, print the maximum one.

Example 1:

Input:
N = 6, target = 2
A[] = {-7,9,8,3,1,1}
Output: 2
Explanation: There is one triplet with sum
2 in the array. Triplet elements are -7,8,
1 whose sum is 2.

Example 2:

Input:
N = 4, target = 13
A[] = {5,2,7,5}
Output: 14
Explanation: There is one triplet with sum
12 and other with sum 14 in the array.
Triplet elements are 5, 2, 5 and 2, 7, 5
respectively. Since abs(13-12) ==
abs(13-14) maximum triplet sum will be
preferred i.e 14.

Your Task:
Complete threeSumClosest() function and return the expected answer.

Expected Time Complexity: O(N*N).
Expected Auxiliary Space: O(1).
'''


class Solution:
    def threeSumClosest(self, arr, target):
        # Your Code Here

        arr.sort()
        n = len(arr)

        ans = []
        temp = []

        for i in range(n-2):
            a = i+1
            b = n-1

            while a < b:
                x = arr[i]+arr[a]+arr[b]
                if x == target:
                    return target
                else:
                    ans.append(x)
                    temp.append(abs(x-target))
                    if x > target:
                        b -= 1
                    else:
                        a += 1

        t = min(temp)+target
        t2 = target-min(temp)

        if t in ans:
            return t
        else:
            return t2
