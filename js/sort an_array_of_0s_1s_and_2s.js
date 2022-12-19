/*
Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order.


Example 1:

Input: 
N = 5
arr[]= {0 2 1 2 0}
Output:
0 0 1 2 2
Explanation:
0s 1s and 2s are segregated 
into ascending order.

Example 2:

Input: 
N = 3
arr[] = {0 1 0}
Output:
0 0 1
Explanation:
0s 1s and 2s are segregated 
into ascending order.


Your Task:
You don't need to read input or print anything. 
Your task is to complete the function sort012() that takes an array arr and N 
as input parameters and sorts the array in-place.


Expected Time Complexity: O(N)
Expected Auxiliary Space: O(1)
*/

//Solution 1
class Solution {
    swapValues(arr, i, j) {
        return [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    sort012(arr, N) {
        let j = 0;
        for (let i = 0; i < N; i++) {
            if (arr[i] == 0) {
                this.swapValues(arr, i, j);
                j++;
            }
        }
        j = N - 1;
        for (let i = N - 1; i >= 0; i--) {
            if (arr[i] == 2) {
                this.swapValues(arr, i, j);
                j--;
            }
        }
        return arr;
    }
}


//Solution 2

class Solution {
    sort012(arr, N) {
        let zero = 0;
        let one = 0;
        let two = 0;

        for (let i = 0; i < N; i++) {
            if (arr[i] == 0) zero++;
            if (arr[i] == 1) one++;
            if (arr[i] == 2) two++;
        }

        for (let i = 0; i < zero; i++) {
            arr[i] = 0;
        }

        for (let i = zero; i < zero + one; i++) {
            arr[i] = 1;
        }

        for (let i = zero + one; i < N; i++) {
            arr[i] = 2;
        }

        return arr;
    }
}