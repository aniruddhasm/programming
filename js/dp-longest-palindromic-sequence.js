/*
Given a String, find the longest palindromic subsequence.


Example 1:

Input:
S = "bbabcbcab"
Output: 7
Explanation: Subsequence "babcbab" is the
longest subsequence which is also a palindrome.

Example 2:

Input: 
S = "abcd"
Output: 1
Explanation: "a", "b", "c" and "d" are
palindromic and all have a length 1.


Your Task:
You don't need to read input or print anything. 
Your task is to complete the function longestPalinSubseq() 
which takes the string S as input and returns an integer denoting the length of the 
longest palindromic subsequence of S.


Expected Time Complexity: O(|S|*|S|).
Expected Auxiliary Space: O(|S|*|S|).
*/


class Solution {
    longestPalinSubseq(S) {
        let n = S.length;
        let i, j, cl;
        let dp = new Array(n);
        for (let x = 0; x < n; x++) {
            dp[x] = new Array(n);
            for (let y = 0; y < n; y++)
                dp[x][y] = 0;
        }

        for (i = 0; i < n; i++)
            dp[i][i] = 1;

        for (cl = 2; cl <= n; cl++) {
            for (i = 0; i < n - cl + 1; i++) {
                j = i + cl - 1;
                if (S[i] == S[j] && cl == 2)
                    dp[i][j] = 2;
                else if (S[i] == S[j])
                    dp[i][j] = dp[i + 1][j - 1] + 2;
                else
                    dp[i][j] = this.max(dp[i][j - 1], dp[i + 1][j]);
            }
        }

        return dp[0][n - 1];
    }

    max(x, y) {
        return (x > y) ? x : y;
    }
}