/*
Given two strings 'str1' and 'str2', check if these two strings are isomorphic to each other.
Two strings str1 and str2 are called isomorphic if there is a one to one mapping possible for every 
character of str1 to every character of str2 while preserving the order.
Note: All occurrences of every character in str1 should map to the same character in str2

Example 1:

Input:
str1 = aab
str2 = xxy
Output: 1
Explanation: There are two different
charactersin aab and xxy, i.e a and b
with frequency 2and 1 respectively.

Example 2:

Input:
str1 = aab
str2 = xyz
Output: 0
Explanation: There are two different
charactersin aab but there are three
different charactersin xyz. So there
won't be one to one mapping between
str1 and str2.

Your Task:
You don't need to read input or print anything.Your task is to complete the function areIsomorphic()
 which takes the string str1 and string str2 as input parameter and  check if two strings are isomorphic.
 The function returns true if strings are isomorphic else it returns false.

Expected Time Complexity: O(|str1|+|str2|).
Expected Auxiliary Space: O(Number of different characters).
Note: |s| represents the length of string s.

*/


class Solution {
    //Function to check if two strings are isomorphic.
    areIsomorphic(str1, str2) {

        if (str1.length !== str2.length) {
            return false;
        }

        let mp1 = new Map();
        let mp2 = new Map();

        for (let i = 0; i < str1.length; i++) {
            if (mp1.has(str1[i]) || mp2.has(str2[i])) {
                if (mp1.get(str1[i]) !== str2[i] || mp2.get(str2[i] !== str1[i])) {
                    return false;
                }
            } else {
                mp1.set(str1[i], str2[i]);
                mp2.set(str2[i], str1[i]);
            }
        }
        return true;
    }
}