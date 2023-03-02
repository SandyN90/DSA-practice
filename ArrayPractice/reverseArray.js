// This is question to get reverse of an array.


const arr = [2, 3, 1, 5, 7, 4, 8, 10];
let count = 1;

for (let i = 0; i < arr.length; i++) {
    let initialIndex = count - 1;
    let lastIndex = arr.length - count;
    if (lastIndex - initialIndex > 0) {
        let temp = arr[initialIndex];
        arr[initialIndex] = arr[lastIndex];
        arr[lastIndex] = temp;
        count++;
    }
}

console.log("sfsdf", arr);