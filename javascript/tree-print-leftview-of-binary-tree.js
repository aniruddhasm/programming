/*
Given a Binary Tree, print Left view of it. Left view of a Binary Tree is set of nodes visible when
 tree is visited from Left side. The task is to complete the function leftView(),
  which accepts root of the tree as argument.

Left view of following tree is 1 2 4 8.

          1
       /     \
     2        3
   /     \    /    \
  4     5   6    7
   \
     8   

Example 1:

Input:
   1
 /  \
3    2
Output: 1 3

Example 2:

Input:

Output: 10 20 40

Your Task:
You just have to complete the function leftView() that returns an array containing the nodes that are in the left view. 
The newline is automatically appended by the driver code.
Expected Time Complexity: O(N).
Expected Auxiliary Space: O(N).
*/

class Solution {
    leftView(root) {
        let result = [];
        result = this.printLeftView(root, result, 0);
        return result;
    }

    printLeftView(root, result, level) {
        if (root == null) {
            return result;
        }
        if (result.length == level) {
            result.push(root.data);
        }
        result = this.printLeftView(root.left, result, level + 1);
        result = this.printLeftView(root.right, result, level + 1);
        return result;
    }
}