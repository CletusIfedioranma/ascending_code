function sortArrayAscending(arr) {
    let len = arr.length;

    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

let originalArray = [5, 2, 0, -3, 4, 5, 2, 10, 40, 1, 3, 4];
let sortedArray = sortArrayAscending(originalArray);

console.log("Original Array:", originalArray);
console.log("Sorted Array (Ascending Order):", sortedArray);
