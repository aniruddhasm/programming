/*
You are given a string s and an integer k. You can choose any character of the string and change 
it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing 
the above operations.

 

Example 1:

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.

Example 2:

Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.

 

Constraints:

    1 <= s.length <= 105
    s consists of only uppercase English letters.
    0 <= k <= s.length


*/

var characterReplacement = function (s, k) {
    const frequencies = {};
    let highestFrequency = 0;
    let longest = 0;
    let left = 0;
    let n = s.length;

    for (let right = 0; right < n; right++) {
        const rightCharacter = s.charAt(right);
        frequencies[rightCharacter] = frequencies[rightCharacter] + 1 || 1;
        highestFrequency = Math.max(highestFrequency, frequencies[rightCharacter]);

        while ((right - left + 1) - highestFrequency > k) {
            const leftCharacter = s.charAt(left);
            frequencies[leftCharacter] -= 1;
            left++;
        }
        longest = Math.max(longest, right - left + 1);
    }
    return longest;
};