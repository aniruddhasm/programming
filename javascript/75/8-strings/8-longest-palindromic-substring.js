/*
Given a string s, return the longest
palindromic
substring
in s.

 

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.

Example 2:

Input: s = "cbbd"
Output: "bb"

 

Constraints:

    1 <= s.length <= 1000
    s consist of only digits and English letters.


*/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (s.length < 2) {
        return s;
    }
    let maxlength = 1;
    let start = 0;
    let low;
    let high;
    for (let i = 0; i < s.length; i++) {
        low = i - 1;
        high = i + 1;
        while (low >= 0 && s[low] == s[i]) {
            low--;
        }
        while (high < s.length && s[high] == s[i]) {
            high++;
        }
        while (low >= 0 && high < s.length && s[low] == s[high]) {
            low--;
            high++;
        }
        let length = high - low - 1;
        if (maxlength < length) {
            maxlength = length;
            start = low + 1;
        }
    }

    return (s.substring(start, maxlength + start));
};