/*
Given a string and a string dictionary, find the longest string in the dictionary that can be formed
 by deleting some characters of the given string. If there are more than one possible results, 
 return the longest word with the smallest lexicographical order. If there is no possible result, return the empty string.

Example 1:

Input: d = {"ale", "apple", "monkey", "plea"}
       S = "abpcplea"
Output: "apple" 
Explanation: After deleting "b", "c"
"a" S became "apple" which is present
in d.

Example 2:

Input: d = {"a", "b", "c"}
       S = "abpcplea"
Output: "a"
Explanation: After deleting "b", "p"
"c", "p", "l", "e", "a" S became 
"a" which is present in d.


Your Task:  
You dont need to read input or print anything. Complete the function findLongestWord() 
which takes S and d as input parameter and returns the longest word.

Expected Time Complexity: O(n*x)
Expected Auxiliary Space: O(x)
*/


class Solution {
    findLongestWord(s, d) {
        //code here
        d.sort();
        let result = '';
        for (const c of d) {
            result = this.findString(c, s, result);
        }
        return result;
    }

    findString(d, s, result) {
        let i = 0;
        let j = 0;

        while (i < d.length && j < s.length) {
            if (d[i] == s[j]) {
                i++;
                j++;
            } else {
                j++;
            }
            if (i == d.length && result.length < d.length) {
                result = d;
            }
        }
        return result;
    }
}