/* 
Given a positive integer N, print count of set bits in it. 

Example 1:

Input:
N = 6
Output:
2
Explanation:
Binary representation is '110' 
So the count of the set bit is 2.

Example 2:

Input:
8
Output:
1
Explanation:
Binary representation is '1000' 
So the count of the set bit is 1.

Your Task:  
You don't need to read input or print anything. Your task is to complete the function setBits()
 which takes an Integer N and returns the count of number of set bits.

Expected Time Complexity: O(LogN)
Expected Auxiliary Space: O(1)
*/

//User function Template for javascript

/**
 * @param {number} n
 * @returns {number}
*/

class Solution {
    setBits(n) {
        let count = 0;
        let remainder = 0;
        while (n > 0) {
            remainder = n % 2;
            if (remainder == 1) {
                count++;
            }
            n = ~~(n / 2);
        }
        return count;
    }
}