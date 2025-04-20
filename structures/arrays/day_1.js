const dataArray = [1, 2, 3, 4, 5, 6, 7];

function myPush(arr, val){
    arr[arr.length] = val

    return arr
}
// console.log(myPush(dataArray, 5));

function reverseArray(arr){
    const resultedArray = [];
    for(let i = 0; i < arr.length; i++){
        let bump = arr[arr.length - (1 + i)]
        resultedArray[i] = bump;
    }
    return resultedArray
}
// console.log(reverseArray(dataArray))

function chunkArray(arr, size){
    const chunks = [];
    let cutPosition = 0;

    for(let i = 1; i <= Math.floor(arr.length / size); i++){
        chunks.push(arr.slice(cutPosition, size*i));
        cutPosition += size
    }

    if(arr.length % size !== 0){
        chunks.push(arr.slice(cutPosition));
    }

    return chunks;
}
// console.log(chunkArray(dataArray, 4))

function removeDuplicates(arr) {
    const diary = [];
    const resulted = [];
    
    for(let i = 0; i < arr.length; i++){
        if(diary.indexOf(arr[i]) === -1) {
            diary.push(arr[i])
            resulted.push(arr[i])
        }
    }
    return resulted
    // return new Set([...arr]) - or easy method
}
const arrayWDup = [1,1,1,1,2,2,2,2,3,3,3,3]
// console.log(removeDuplicates(arrayWDup))

// Знайти другий найбільший елемент
// console.log( dataArray.sort((a,b) => b - a)[1] )

// Перевернути масив без .reverse()
// Вище написана функція reverseArray()

// Обчислити суму всіх чисел
// console.log( dataArray.reduce((acc, num) => acc + num, 0) )

// Перевірити чи масив є паліндромом
function checkPalindrom(arr) {
    for(let i = 0; i < Math.floor(arr.length / 2); i++){
        if(arr[i] !== arr[arr.length - (1 + i)]){
            return false
        }
    }
    return true
}
const palindrome = [1,2,3,2,1]
// console.log(checkPalindrom(palindrome))


