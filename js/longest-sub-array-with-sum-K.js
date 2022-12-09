/**
Given an array containing N integers and an integer K., 
Your task is to find the length of the longest Sub-Array with the sum of the elements equal to the given value K.

 

Example 1:
 

Input :
A[] = {10, 5, 2, 7, 1, 9}
K = 15
Output : 4
Explanation:
The sub-array is {5, 2, 7, 1}.

Example 2:

Input : 
A[] = {-1, 2, 3}
K = 6
Output : 0
Explanation: 
There is no such sub-array with sum 6.

Your Task:
This is a function problem. The input is already taken care of by the driver code. 
You only need to complete the function lenOfLongSubarr() that takes an array (A), sizeOfArray (n), 
 sum (K)and returns the required length of the longest Sub-Array. The driver code takes care of the printing.

Expected Time Complexity: O(N).
Expected Auxiliary Space: O(N).
 */




function lenOfLongSubarr(arr, n, k){
    let map = new Map();
    let currentSum = 0
    let maxSize = 0;

    for (let i = 0; i < n; i++) {
        currentSum += arr[i];

        if (currentSum == k) {
            maxSize = Math.max(maxSize, i + 1);
        }

        if (!map.has(currentSum)) {
            map.set(currentSum, i);
        }

        if (map.has(currentSum - k)) {
            maxSize = Math.max(maxSize, i - map.get(currentSum - k));
        }
    }
    return maxSize;
}

console.log(lenOfLongSubarr([10, 5, 2, 7, 1, 9], 6, 15)) //4 // [5,2,7,1]