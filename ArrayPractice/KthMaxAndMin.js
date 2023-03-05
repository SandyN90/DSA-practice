// Find out the kth maximum and minimum element of the array.

const arr = [2, 3, 1, 5, 7, 4, 8, 10];

console.log(arr.sort((a, b) => a - b))

const data = [6, 3, 4, 2, 5, 8, 1, 9, 7];

// find the Kth element of an array

const kthELement = (arr, k) => {
    for (let i = 1; i < arr.length; i++) {
        let j = i;
        while (j >= 0 && arr[j] < arr[j - 1]) {
            let temp = arr[j - 1];
            arr[j - 1] = arr[j];
            arr[j] = temp;
            j--;
        }
    }
    return { min: arr[k - 1], max: arr[arr.length - k - 1] };
};

console.log(kthELement(data, 2));
