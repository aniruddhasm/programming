/**
 * Given K sorted linked lists of different sizes.
 *  The task is to merge them in such a way that after merging they will be a single sorted linked list.

Example 1:

Input:
K = 4
value = {{1,2,3},{4 5},{5 6},{7,8}}
Output: 1 2 3 4 5 5 6 7 8
Explanation:
The test case has 4 sorted linked 
list of size 3, 2, 2, 2
1st    list     1 -> 2-> 3
2nd   list      4->5
3rd    list      5->6
4th    list      7->8
The merged list will be
1->2->3->4->5->5->6->7->8.

Example 2:

Input:
K = 3
value = {{1,3},{4,5,6},{8}}
Output: 1 3 4 5 6 8
Explanation:
The test case has 3 sorted linked
list of size 2, 3, 1.
1st list 1 -> 3
2nd list 4 -> 5 -> 6
3rd list 8
The merged list will be
1->3->4->5->6->8.

Your Task:
The task is to complete the function mergeKList() which merges the K given lists into a sorted one. 
The printing is done automatically by the driver code.

Expected Time Complexity: O(nk Logk)
Expected Auxiliary Space: O(k)
Note: n is the maximum size of all the k link list
 * 
 */

class Solution {
    //Function to merge K sorted linked list.
    mergeKLists(arr, K) {
        //your code here
        if (!arr || arr.length == 0) {
            return null;
        }

        let ans = null;
        for (let i = 0; i < K; i++) {
            ans = this.merge(ans, arr[i]);
        }
        return ans;
    }

    merge(l1, l2) {
        if (!l1 && !l2) return null;
        if (l1 == null) return l2;
        if (l2 == null) return l1;

        let temp = new Node(-1);
        let tail = temp;

        while (l1 && l2) {
            if (l1.data <= l2.data) {
                tail.next = l1;
                l1 = l1.next;
            } else {
                tail.next = l2;
                l2 = l2.next;
            }
            tail = tail.next;
        }

        if (l1) {
            tail.next = l1;
        } else if (l2) {
            tail.next = l2;
        }
        return temp.next;
    }
}