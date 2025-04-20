// Map / Reduce / Filter Chaining

const people = [
    { name: 'Оля', age: 22 },
    { name: 'Ігор', age: 17 },
    { name: 'Маша', age: 19 },
  ];

const test = people.filter(el => el.age > 18).map(el => el.name).join(', ')

console.log(test)

//Sliding window

//if i need max value
export function slidindWindow(arr, k) {
    let initialValue = arr.slice(0, k).reduce((acc, num) => acc + num, 0);
    let maxSum = initialValue;
    
    for(let i = 0; i < arr.length - k; i++){
        initialValue = initialValue - arr[i] + arr[i + k]

        if(initialValue > maxSum) maxSum = initialValue;
    }

    return maxSum
}

//if i need max elements

export function slidindWindowIndex(arr, k) {
    let initialValue = arr.slice(0, k).reduce((acc, num) => acc + num, 0);
    let maxSum = initialValue;

    let indexes = 0;
    
    for(let i = 0; i < arr.length - k; i++){
        initialValue = initialValue - arr[i] + arr[i + k]

        if(initialValue > maxSum){
            maxSum = initialValue;
            indexes = i + 1;
        }
    }

    return arr.slice(indexes, indexes + k)
}

//Two pointers [bad complexity]

// export function checkTarget(arr, target) {
//     for(let i = 0; i < arr.length; i++){
//         for(let j = 0; j < arr.length; j++){
//             if((arr[i] + arr[j]) === target && i !== j){
//                 return [arr[i], arr[j]]
//             }
//         }
//     }
//     return false
// }

export function checkTarget(arr, target) {
    arr = arr.sort((a, b) => a - b);

    let left = 0, right = arr.length - 1;
    let sum = arr[left] + arr[right]

    while(left < right){
        sum = arr[left] + arr[right]

        if(sum === target) return [arr[left], arr[right]];

        if(sum < target){
            left++;
        }else if(sum > target){
            right--
        }
    }

    return false;
}

//Методи сортування: bubbleSort, selectionSort, insertionSort

export function bubleSort(arr){ // O(n2)
    for(let i = 0; i < arr.length - 1; i++){
        for(let j = 0; j < arr.length - 1 - i; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j + 1] = temp;
            }
        }
    }
}

export function selectionSort(arr){ // O(n2)
    let checkedElement = 0;
    let swapedIndex = 0;
    let buffer = 0;

    for(let i = 0; i < arr.length; i++){
        checkedElement = arr[i];
        for(let j = 0 + i; j < arr.length; j++){
            if(checkedElement > arr[j]){
                checkedElement = arr[j]
                swapedIndex = j
            }
        }
        buffer = arr[i];
        arr[i] = checkedElement;
        arr[swapedIndex] = buffer
    }
}

export function insertionSort(arr) { // O(n2)
    for(let i = 1; i < arr.length; i++){
        let current = arr[i];
        let prev = i - 1;

        while(prev >= 0 && arr[prev] > current){
            arr[prev + 1] = arr[prev];
            prev--
        }

        arr[prev + 1] = current;
    }
}

export function mergeSort(arr){ // O(n log n)
    if(arr.length <= 1) return arr;

    const mid  = Math.floor(arr.length / 2);

    const leftHalf = arr.slice(0, mid);
    const rightHalf = arr.slice(mid);

    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf)

    return merge(sortedLeft, sortedRight)

    function merge(left, right){
        const result = [];
        let i = 0, j = 0;

        while(i < left.length && j < right.length){
            if(left[i] < right[j]){
                result.push(left[i]);
                i += 1;
            }else{
                result.push(right[j]);
                j += 1;
            }
        }
        result.push(...left.slice(i));
        result.push(...right.slice(j));

        return result
    }
    
}

export function quickSort(arr){ // O(n log n) seems like best method
    if(arr.length <= 1) return arr;

    function swap(arr, i, j){
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    function partition(arr, low, hight){
        let i = low, j = hight + 1;

        while(true){
            while(arr[++i] < arr[low]){
                if(i === hight) break;
            }

            while(arr[--j] > arr[low]){
                if( j === low) break;
            }

            if(i >= j) break;

            swap(arr, i, j)
        }
        swap(arr, low, j)

        return j;
    }

    function sort(arr, low, hight){
        if(hight <= low) return;

        const j = partition(arr, low, hight);

        sort(arr, low, j - 1);
        sort(arr, j + 1, hight);
    }

    sort(arr, 0, arr.length - 1)

    return arr;
}

//Реалізую власний .map() .forEach()

export function map(array, callback) {
    const result = [];

    for(let i = 0; i < array.length; i++){
        result.push(callback(array[i], i, array))
    }

    return result;
}

export function forEach() {
    for(let i = 0; i < array.length; i++){
        callback(array[i], i, array)
    }

    return undefined;
}

// Реалізовую власний arrayFrom

export function arrayFrom(object, mapFn = (el) => el, thisArg = this){
    const result = [];

    if(object !== null && typeof object?.[Symbol.iterator] === 'function'){
        for(let [i, value] of [...object].entries()){
            result.push(mapFn.call(thisArg, value, i, object));
        }
    }else if(object !== null && typeof object === 'object'){
        const keys = Object.keys(object);
        for(let i = 0; i < keys.length; i++){
            result.push(mapFn.call(thisArg, object[keys[i]], keys[i], object))
        }
    }


    return result;
}