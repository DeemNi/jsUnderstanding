import { MyArray, shufleArray } from "./arrays/part_2.js";
import { expandArr, expandArrStack, permute } from "./arrays/part_3.js";
import { arrayFrom, bubleSort, checkTarget, insertionSort, map, mergeSort, quickSort, selectionSort, slidindWindow, slidindWindowIndex } from "./arrays/part_4.js";

const dataArray = [1,2,3,4,[5,6,7],8,[1,[1,2,[1,2,[[1]]]],3]]

const arr = [1, 4, 2, 10, 23, 3, 1, 0, 20]

const obj = {
    k1: 111,
    k2: 222,
    k3: 'ss'
}

// console.log(slidindWindow(arr, 4))

// console.log(slidindWindowIndex(arr, 4))

// console.log(checkTarget(arr, 2))

console.log(arrayFrom(obj, (a) => a))

// console.log(arr)

