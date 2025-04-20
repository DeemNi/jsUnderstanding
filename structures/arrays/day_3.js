// 🟢 1. unshift і shift (реалізуй вручну)

export function shift(arr) {
    if(arr.length === 0) return undefined;
    const firstElement = arr[0];

    for(let i = 1; i < arr.length; i++){
        arr[i - 1] = arr[i]
    }
    arr.length--;

    return firstElement

    // return arr.slice(1,) - простіше так, але не повна реалізація.
}

export function unshift(arr, el) {
    for(let i = arr.length; i > 0; i--){
        arr[i - 1] = arr[i];
    }
    arr[0] = el;

    return arr.length;

    // return [el, ...arr] - простіше так, але не повна реалізація.
}

// 🟡 2. Розверни вкладений масив довільної глибини

export function expandArr(arr){
    const result = [];

    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            const flattedArray = expandArr(arr[i])
            result.push(...flattedArray)
        }else result.push(arr[i])
    }
    return result
}

export function expandArrStack(arr){
    const stack = [...arr];
    const result = [];

    while(stack.length > 0){
        const current = stack.pop();

        if(Array.isArray(current)){
            stack.push(...current)
        } else result.push(current)
    }
    
    return result.reverse();
}

// 🔵 3. Реалізуй метод filter, як у Array.prototype.filter

export function filter(arr, callback){
    const result = []

    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i], i, arr)){
            result.push(arr[i])
        }
    }

    return result
}

Array.prototype.filterX = function(callback){
    const result = [];
    
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, arr)){
            result.push(this[i]);
        }
    }
    return result;
}

// 🔴 4. Напиши власний reduce

export function reduce(arr, callback, initialValue){
    let haveInitialvalue = initialValue !== undefined;
    let result = haveInitialvalue ? initialValue : arr[0];
    let startIndex = haveInitialvalue ? 0 : 1;

    for(let i = startIndex; i < arr.length; i++){
        result = callback(result, arr[i], i, arr)
    }

    return result
}

// 🟣 5. Знайди всі перестановки масиву

export function permute(arr) {
    const result = [];
    const used = Array(arr.length).fill(false)

    function backtrack(path, used) {
        if (path.length === arr.length) {
            result.push([...path])
            return;
        }

        for (let i = 0; i < arr.length; i++) {
            if (used[i]) continue;

            used[i] = true;
            path.push(arr[i]);
            
            backtrack(path, used)

            path.pop()
            used[i] = false;
        }
    }

    backtrack([], used);
    return result;
}

