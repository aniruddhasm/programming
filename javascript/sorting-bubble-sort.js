function bubbleSort(arr) {
    let noSwaps = false;
    const len = arr.length;
    for (let i = len; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i-1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
                noSwaps = false
            }
        }
        if (noSwaps) break;
    }
    return arr;
}


console.log(bubbleSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))