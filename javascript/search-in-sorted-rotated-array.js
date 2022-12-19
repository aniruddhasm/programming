/*
Given a sorted and rotated array A of N distinct elements which is rotated at some point,
 and given an element key. The task is to find the index of the given element key in the array A.

Example 1:

Input:
N = 9
A[] = {5, 6, 7, 8, 9, 10, 1, 2, 3}
key = 10
Output:
5
Explanation: 10 is found at index 5.

Example 2:

Input:
N = 4
A[] = {3, 5, 1, 2}
key = 6
Output:
-1
Explanation: There is no element that has value 6.

Your Task:
Complete the function search() which takes an array arr[] and start, 

end index of the array and the K as input parameters, and returns the answer.

Can you solve it in expected time complexity?

Expected Time Complexity: O(log N).
Expected Auxiliary Space: O(1).
*/


function search(A, l, h, key) {
    // l: The starting index
    // h: The ending index, you have to search the key in this range
    //code here

    while (l <= h) {
        let mid = Math.floor((l + h) / 2);
        if (A[mid] == key) return mid;
        else if (A[mid] >= A[l]) {
            if (key <= A[mid] && key >= A[l]) {
                h = mid - 1;
            } else {
                l = mid + 1;
            }
        } else {
            if (key >= A[mid] && key <= A[h]) {
                l = mid + 1;
            } else {
                h = mid - 1;
            }
        }
    }
    return -1;
}