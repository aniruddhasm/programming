/*
Given an array arr[], its starting position l and its ending position r. 
Sort the array using merge sort algorithm.
Example 1:

Input:
N = 5
arr[] = {4 1 3 9 7}
Output:
1 3 4 7 9

Example 2:

Input:
N = 10
arr[] = {10 9 8 7 6 5 4 3 2 1}
Output:
1 2 3 4 5 6 7 8 9 10


Your Task:
You don't need to take the input or print anything. 
Your task is to complete the function merge() which takes arr[], l, m, r as its input parameters 
and modifies arr[] in-place such that it is sorted from position l to position r, 
and function mergeSort() which uses merge() to sort the array in ascending order using merge sort algorithm.

Expected Time Complexity: O(nlogn) 
Expected Auxiliary Space: O(n)
*/


class Solution {
    merge(arr, l, m, r) {
        let i = l;
        let j = m + 1;
        let result = [];
        while (i <= m && j <= r) {
            if (arr[i] >= arr[j]) {
                result.push(arr[j]);
                j++;
            } else {
                result.push(arr[i]);
                i++;
            }
        }
        while (i <= m) {
            result.push(arr[i]);
            i++;
        }
        while (j <= r) {
            result.push(arr[j]);
            j++;
        }
        for (let k = 0; k < result.length; k++) {
            arr[l + k] = result[k];
        }
    }

    mergeSort(arr, l, r) {
        if (r > l) {
            let mid = Math.floor((l + r) / 2)
            this.mergeSort(arr, l, mid);
            this.mergeSort(arr, mid + 1, r);
            this.merge(arr, l, mid, r);
        }
    }
}