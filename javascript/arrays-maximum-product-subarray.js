/*
Given an integer array nums, find a
subarray
that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.

 

Example 1:

Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.

Example 2:

Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

 

Constraints:

    1 <= nums.length <= 2 * 104
    -10 <= nums[i] <= 10
    The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

*/
//solution 1
var maxProduct = (nums) => {

    let ans = Number.MIN_SAFE_INTEGER;
    let sum = 1;
    const N = nums.length;

    for (let i = 0; i < N; i++) {
        sum *= nums[i];
        ans = Math.max(ans, sum);
        if (sum == 0) {
            sum = 1;
        }
    }
    sum = 1;
    for (let i = N - 1; i >= 0; i--) {
        sum *= parseInt(nums[i]);
        ans = Math.max(ans, sum);
        if (sum == 0) {
            sum = 1;
        }
    }

    return ans;
}

//solution 2
var maxProduct = function (nums) {

    let res = parseInt(arr[0]);
    let currMin = 1;
    let currMax = 1;

    for (let i = 0; i < n; i++) {
        if (arr[i] == 0) {
            currMin = 1;
            currMax = 1;
            continue;
        }

        let intNum = parseInt(arr[i]);
        let temp = currMax * intNum;
        currMax = Math.max(Math.max(currMax * intNum, currMin * intNum), intNum);
        currMin = Math.min(Math.min(temp, currMin * intNum), intNum);
        res = Math.max(res, currMax);
    }
    return res;
};