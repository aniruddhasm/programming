'''
Given a binary tree, find its level order traversal.
Level order traversal of a tree is breadth-first traversal for the tree.


Example 1:

Input:
    1
  /   \ 
 3     2
Output:1 3 2

Example 2:

Input:
        10
     /      \
    20       30
  /   \
 40   60
Output:10 20 30 40 60


Your Task:
You don't have to take any input. Complete the function levelOrder() that takes the root node as input parameter and returns a list of integers containing the level order traversal of the given Binary Tree.


Expected Time Complexity: O(n)
Expected Auxiliary Space: O(n)

'''

class Solution:
    def levelOrder(self,root ):
        q = [];
        data = [];
        node = root;
        q = deque([root])
        while(len(q)>0):
            node = q.popleft();
            data.append(node.data);
            if(node.left):
                q.append(node.left);
            if(node.right):
                q.append(node.right);
        
        return data;