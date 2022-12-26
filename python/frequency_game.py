'''
Given an array A of size N. The elements of the array consists of positive integers. You have to find the 
largest element with minimum frequency.

Input Format: First line of input contains number of testcases T. For each testcase there will be two lines. 
First line contains N, next line contains N elements separated by spaces.

Output Format: For each testcase, print the largest element with minimum frequency.

Example:

Input: 
5
2 2 5 50 1

Output:
50

Explanation :
Testcase 1: All elements are having frequency 1 except 2.
 50 is the maximum element with minimum frequency.

Note: use HashMap to compute the element and its frequency.

User Task:
Your task is to complete the provided function LargButMinFreq(A, n) which accepts array A and n. 
Hence you have to return the largest element with minimum frequency.
'''


def LargButMinFreq(arr, n):
    # code here

    dt = {}

    for i in range(n):
        if arr[i] in dt:
            dt[arr[i]] += 1
        else:
            dt[arr[i]] = 1

    l = []
    min_freq = dt[arr[0]]
    for key, value in dt.items():
        if value <= min_freq:
            min_freq = value
            l.append(key)

    return max(l)
