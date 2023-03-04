// Bubble sort

// Bubble sort- As name suggest that any of the largest value will be bubbled to last index of the array
// As in bubble sort time complexity of the array for worst case is bigO of n2

const data = [2, 3, 1, 8, 10, 5, 7, 4];

const bubbleSort = (arrayValue) => {
    for (let i = 0; i < arrayValue.length; i++) {

        for (let j = 0; j < arrayValue.length - 1; j++) {
            if (arrayValue[j] > arrayValue[j + 1]) {
                let temp = arrayValue[j];
                arrayValue[j] = arrayValue[j + 1];
                arrayValue[j + 1] = temp;
            }

        }
    }
    return arrayValue;
}

console.log(bubbleSort(data));

// ---------------------- selection sort ------------------------



// selection sorting
// here we can find individual smallest element in every path and replace it with from intial index of the array

const selectionSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        let min = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
};

console.log(selectionSort(data));

// insertion sort
// Here any array will be sorted as current index element compare with previous one and swapped till current index element swapped to that index where no value 
// is greater than its left index.

let count = 0;
const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        // for (let j = i; j >= 0; j--) {
        //   console.log(count++);

        //   if (arr[j] < arr[j - 1]) {
        //     let temp = arr[j - 1];
        //     arr[j - 1] = arr[j];
        //     arr[j] = temp;
        //   }
        // }
        let j = i;
        while (j > 0 && arr[j] < arr[j - 1]) {
            let temp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = temp;
            j--;
        }
    }
    return arr;
};

console.log(insertionSort(data));


