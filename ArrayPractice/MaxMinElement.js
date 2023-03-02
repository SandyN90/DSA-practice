// Find max and min element of the array.

const arr = [2, 3, 1, 5, 7, 4, 8, 10];

let min = max = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i]
    if (arr[i] < min) min = arr[i];
}
console.log(max, min);