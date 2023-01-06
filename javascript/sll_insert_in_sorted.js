/*
Given a linked list sorted in ascending order and an integer called data, insert data in the linked list such 
that the list remains sorted.

Example 1:

Input:
LinkedList: 25->36->47->58->69->80
data: 19
Output: 19 25 36 47 58 69 80

Example 2:

Input:
LinkedList: 50->100
data: 75
Output: 50 75 100

Your Task:
The task is to complete the function sortedInsert() which should insert the element in sorted Linked List and 
return the head of the linked list

Expected Time Complexity: O(N).
Expected Auxiliary Space: O(1).
*/

class Solution {
    sortedInsert(node, data) {
        const newNode = new Node(data)
        while (node.data > data) {
            newNode.next = node;
            return newNode;
        }

        let current = node;

        while (current.next != null) {
            if (current.data <= data && current.next.data >= data) {
                let temp = current.next;
                current.next = newNode;
                newNode.next = temp;
                return node;
            }
            current = current.next;
        }
        current.next = newNode;
        return node;
    }
}