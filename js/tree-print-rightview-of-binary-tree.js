/*
Given a Binary Tree, find Right view of it. Right view of a Binary Tree is set of nodes visible when tree 
is viewed from right side.

Right view of following tree is 1 3 7 8.

          1
       /     \
     2        3
   /   \      /    \
  4     5   6    7
    \
     8

Example 1:

Input:
       1
    /    \
   3      2
Output: 1 2

Example 2:

Input:
     10
    /   \
  20     30
 /   \
40  60 
Output: 10 30 60

Your Task:
Just complete the function rightView() that takes node as parameter and returns the right view as a list. 

Expected Time Complexity: O(N).
Expected Auxiliary Space: O(Height of the Tree).
*/

class Solution {
    rightView(root) {
        let result = [];
        result = this.printRightView(root, result, 0);
        return result;
    }

    printRightView(root, result, level) {
        if (root == null) {
            return result;
        }
        if (result.length == level) {
            result.push(root.data);
        }
        result = this.printRightView(root.right, result, level + 1);
        result = this.printRightView(root.left, result, level + 1);
        return result;
    }
}