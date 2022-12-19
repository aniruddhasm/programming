/*
Given two binary trees, the task is to find if both of them are identical or not. 


Example 2:

Input:
     1          1
   /   \      /   \
  2     3    2     3
Output: Yes
Explanation: There are two trees both
having 3 nodes and 2 edges, both trees
are identical having the root as 1,
left child of 1 is 2 and right child
of 1 is 3.

Example 2:

Input:
    1       1
  /  \     /  \
 2    3   3    2
Output: No
Explanation: There are two trees both
having 3 nodes and 2 edges, but both
trees are not identical.


Your task:
Since this is a functional problem you don't have to worry about input, 
you just have to complete the function isIdentical() that takes two roots as parameters and returns true or false. 
The printing is done by the driver code.


Expected Time Complexity: O(N).
Expected Auxiliary Space: O(Height of the Tree).

*/




//Solution 1

class Solution {
    //Function to check if two trees are identical.
    isIdentical(root1, root2) {
        if (root1 == null || root2 == null) {
            return root1 == root2;
        }

        let leftValue = this.isIdentical(root1.left, root2.left);
        let rightValue = this.isIdentical(root1.right, root2.right);

        return root1.data == root2.data && leftValue && rightValue;
    }
}

//Solution 2

class Solution {
    isIdentical(root1, root2) {

        if (root1 == null && root2 != null || root2 == null && root1 != null) {
            return false;
        }

        if (root1 == null && root2 == null) {
            return true;
        }

        if (root1.data != root2.data) {
            return false;
        }

        return this.isIdentical(root1.left, root2.left) && this.isIdentical(root1.right, root2.right);
    }
}


//Solution 3
//Using BFS on trees at the same time and check for the values.