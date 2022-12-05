function binarySearch1(arr, ele) {
    let start = 0;
    let end = arr.length - 1;
    let mid = Math.floor((start + end) / 2);
    while (arr[mid] !== ele && start <= end) {
        if (arr[mid] > ele) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
        mid = Math.floor((start + end) / 2);
    }
    return (arr[mid] === ele) ? mid : -1;
}



function binarySearch(arr, elem) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        mid = Math.floor((start + end) / 2)
        if (arr[mid] < elem) {
            start = mid + 1;
        } else if (arr[mid] > elem) {
            end = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}


//binarySearch Recursive
function binarySearchRecurive(arr, elem, start, end) {
    if (start > end) return -1;

    let mid = Math.floor((start + end) / 2);
    if (arr[mid] < elem) {
        return binarySearchRecurive(arr, elem, mid + 1, end)
    } else if (arr[mid] > elem) {
        return binarySearchRecurive(arr, elem, start, mid - 1)
    } else {
        return mid;
    }
}


const nums = [1, 2, 3, 5, 7, 9, 10, 14, 20];
const search = 9;

console.log(binarySearch1(nums, search));
console.log(binarySearch(nums, search));
console.log(binarySearchRecurive(nums, search, 0, nums.length - 1));