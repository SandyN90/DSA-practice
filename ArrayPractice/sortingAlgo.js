// Bubble sort

// Bubble sort- As name suggest that any of the largest value will be bubbled to last index of the array
// As in bubble sort time complexity of the array for worst case is bigO of n2

const arr = [2, 3, 1, 8, 10, 5, 7, 4];

const bubbleSort = (arrayValue) => {
    for (let i = 0; i < arrayValue.length; i++) {
        console.log("🚀 ~ file: sortingAlgo.js:11 ~ temp:")

        for (let j = 0; j < arrayValue.length - 1; j++) {
            if (arrayValue[j] > arrayValue[j + 1]) {
                let temp = arrayValue[j];
                console.log("🚀 ~ file: sortingAlgo.js:11 ~ temp:", temp)
                arrayValue[j] = arrayValue[j + 1];
                arrayValue[j + 1] = temp;
            }

        }
    }
    return arrayValue;
}

console.log(bubbleSort(arr));

// ---------------------- selection sort ------------------------


// const selectionSort = (unsortedArray) => {
//     for (let i = 0; i < unsortedArray.length; i++) {

//     }
// }

