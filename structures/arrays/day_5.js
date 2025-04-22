// Реалізуй slice() .Неглибоке копіювання масиву

export function slice(arr, start = 0, end = arr.length){
    const slicedArray = [];

    const beginPosition = start < 0 ? Math.max(0, arr.length + start) : Math.min(start, arr.length);
    const endPosition = end < 0 ? Math.max(0, arr.length + end) : Math.min(end, arr.length);

    for(let i = beginPosition; i < endPosition; i++){
        slicedArray.push(arr[i])
    }

    return slicedArray;
}

// Реалізуй splice() .Видалення/вставка елементів

export function splice(arr, start = 0, delCount, ...items){
    const splicedArray = [];

    const beginPosition = start < 0 ? Math.max(0, arr.length + start) : Math.min(start, arr.length);
    const deletedCount = delCount === undefined ? arr.length - beginPosition : Math.min(delCount, arr.length - beginPosition);

    const before = [];  

    for(let i = 0; i < beginPosition; i++){
        before.push(arr[i])
    }

    const after = [];
    
    for(let i = beginPosition + deletedCount; i < arr.length; i++){
        after.push(arr[i])
    }

    const deleted = []

    for(let i = beginPosition; i < beginPosition + deletedCount; i++){
        deleted.push(arr[i]);
    }

    arr.length = 0;
    before.concat(...items, after).forEach(el => arr.push(el))

    return deleted;
}

// Реалізуй Array.prototype.find() .Повернути перший, що задовольняє умову

export function find(arr, callback, thisArg = this){
    for(let i = 0; i < arr.length; i++){
        if(callback.call(thisArg, arr[i], i, arr)) return arr[i];
    }
    return undefined
}

// Реалізуй deepClone() .Рекурсивне клонування об'єктів і масивів

export function deepClone(arr){

        if(Array.isArray(arr)){
            return arr.map(el => deepClone(el))   
        }else if(typeof arr === 'object' && arr !== null){
            const newObj = {};

            for(let key in arr){
                newObj[key] = deepClone(arr[key])
            }
            return newObj
        }else return arr

}

// Реалізуй JSON.stringify() (спрощено)	.Рекурсія + типи

export function stringify(value, replacer, space){

    if(typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean' || value === null){
        return `"${value}"`;
    }else if(Array.isArray(value)){
       return `[${value.map(el => {
        if(el === undefined || typeof el === 'function' || typeof el === 'symbol'){
            return null
        }
        return stringify(el, replacer, space)
       }).join(',')}]`
    }else if(typeof value === 'object' && !Array.isArray(value)){
        const props = Object.keys(value).reduce((acc, key) => {
            const val = value[key];
            if(typeof val === 'undefined' || typeof val === 'function' || typeof val === 'symbol'){
                return acc
            } 
            acc.push(`"${key}":${stringify(val, replacer, space)}`)
            return acc
        }, []);

        return `{${props.join(',')}}`;
    }

}

// Binary Search .На відсортованих масивах

// Two Sum / 3Sum / 4Sum .Пошук комбінацій з певною сумою

// Subsets / Permutations / Combinations .Backtracking, комбінації з масиву

// Merge Intervals	.Поширена задача на співставлення діапазонів

// First Missing Positive .Мінімальне позитивне число, що відсутнє

// Product of Array Except Self	.Не можна використовувати ділення

// Set Matrix Zeroes	.Матриця як масив масивів

// Maximum Subarray .Алгоритм Кадане

// Search in Rotated Sorted Array .Binary + логіка