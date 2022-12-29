/*
Given a string S, find the length of the longest substring without repeating characters.


Example 1:

Input:
S = "geeksforgeeks"
Output:
7
Explanation:
Longest substring is
"eksforg".

Example 2:

Input:
S = "abdefgabef"
Output:
6
Explanation:
Longest substring are
"abdefg" , "bdefga" and "defgab".

 

Your Task:
You don't need to take input or print anything. Your task is to complete the function longestUniqueSubsttr() 
which takes a string S as and returns the length of the longest substring.

 

Expected Time Complexity: O(|S|).
Expected Auxiliary Space: O(K) where K is constant.

Constraints:
1 ≤ |S| ≤ 105
It is guaranteed that all characters of the String S will be lowercase letters from 'a' to 'z'

*/

class Solution {
    longestUniqueSubsttr(str) {
        //code here
        let obj = {};

        let cm = 0;
        let count = 0;
        let i = 0;

        while (i < str.length) {
            if (str[i] in obj) {
                if (cm < count) {
                    cm = count;
                }
                count = 0;
                i = obj[str[i]] + 1;
                obj = {};
            } else {
                obj[str[i]] = i
                count += 1;
                i += 1;
            }
        }

        if (cm > count) {
            return cm;
        } else {
            return count;
        }
    }
}