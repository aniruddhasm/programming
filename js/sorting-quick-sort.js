/*
Quick Sort is a Divide and Conquer algorithm.
 It picks an element as a pivot and partitions the given array around the picked pivot.
Given an array arr[], its starting position is low (the index of the array)
and its ending position is high(the index of the array).

Note: The low and high are inclusive.

Implement the partition() and quickSort() functions to sort the array.


Example 1:

Input: 
N = 5 
arr[] = { 4, 1, 3, 9, 7}
Output:
1 3 4 7 9

Example 2:

Input: 
N = 9
arr[] = { 2, 1, 6, 10, 4, 1, 3, 9, 7}
Output:
1 1 2 3 4 6 7 9 10


Your Task: 
You don't need to read input or print anything. Your task is to complete the functions partition()  
and quickSort() which takes the array arr[], low and high as input parameters and partitions the array. 
Consider the last element as the pivot such that all the elements less than(or equal to) the pivot lie before it 
and the elements greater than it lie after the pivot.


Expected Time Complexity: O(N*logN)
Expected Auxiliary Space: O(1)
*/

class Solution {
    partition(arr, low = 0, high = arr.length - 1) {
        let pivot = arr[low];
        let swapIdx = low;
        for (let i = low + 1; i < arr.length; i++) {
            if (pivot > arr[i]) {
                swapIdx++;
                [arr[swapIdx], arr[i]] = [arr[i], arr[swapIdx]];
            }
        }
        [arr[swapIdx], arr[low]] = [arr[low], arr[swapIdx]];
        return swapIdx;

    }

    quickSort(arr, low = 0, high = arr.length - 1) {
        if (low < high) {
            let pivotIdx = this.partition(arr, low, high);
            this.quickSort(arr, low, pivotIdx - 1);
            this.quickSort(arr, pivotIdx + 1, high);
        }
        return arr;
    }
}