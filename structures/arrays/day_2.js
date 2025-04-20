export class MyArray {
    constructor(data) {
        this.data = {...data};
        this.length = data.length;
    }

    push(value) {
        this.data[this.length] = value;
        this.length++;
    }
    pop() {
        const keys = Object.keys(this.data);
        if(keys.length === 0) return undefined;

        const lastKey = keys[keys.length - 1];
        const value = this.data[lastKey]
        delete this.data[lastKey]
        this.length--;

        return value
    }
    get(index) {
        if(index > this.length){
            console.error('Current index doesent exist')
        } else return this.data[index]
    }
}

export function shufleArray(arr){

    for(let i = arr.length - 1; i > 0; i--){
        const random = Math.floor(Math.random() * (i + 1));

        [arr[i], arr[random]] = [arr[random], arr[i]]
    }
}