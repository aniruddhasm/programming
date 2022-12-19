/**
The task is to complete the insert() function which is used to implement Insertion Sort.


Example 1:

Input:
N = 5
arr[] = { 4, 1, 3, 9, 7}
Output:
1 3 4 7 9

Example 2:

Input:
N = 10
arr[] = {10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
Output:
1 2 3 4 5 6 7 8 9 10


Your Task: 
You don't have to read input or print anything. Your task is to complete the function insert() 
and insertionSort() where insert() takes the array, it's size and an index i and insertionSort() 
uses insert function to sort the array in ascending order using insertion sort algorithm. 


Expected Time Complexity: O(N*N).
Expected Auxiliary Space: O(1). 

 */

class Solution {
    insert(arr, i) {
        // code here such that insertionSort() sorts arr[]
        let currentVal = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentVal;
    }

    //Function to sort the array using insertion sort algorithm.
    insertionSort(arr, n) {
        for (let i = 1; i < n; i++) {
            this.insert(arr, i);
        }
    }

}