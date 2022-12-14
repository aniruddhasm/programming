/*
The diameter of a tree (sometimes called the width) is the number 
of nodes on the longest path between two end nodes. 
The diagram below shows two trees each with diameter nine,
 the leaves that form the ends of the longest path are shaded
  (note that there is more than one path in each tree of length nine, but no path longer than nine nodes). 

Example 1:

Input:
       1
     /  \
    2    3
Output: 3

Example 2:

Input:
         10
        /   \
      20    30
    /   \ 
   40   60
Output: 4

Your Task:
You need to complete the function diameter() that takes root as parameter and returns the diameter.

Expected Time Complexity: O(N).
Expected Auxiliary Space: O(Height of the Tree).
*/

class Solution {
    // Function to return the diameter of a Binary Tree.
    diameter(root) {
        if (root == null) {
            return 0;
        }

        let dl = this.diameter(root.left);
        let dr = this.diameter(root.right);

        let currentHeight = this.height(root.left) + this.height(root.right) + 1;
        return Math.max(currentHeight, Math.max(dl, dr));

    }

    height(root) {
        if (root == null) {
            return 0;
        }
        return (Math.max(this.height(root.left), this.height(root.right)) + 1);
    }
}