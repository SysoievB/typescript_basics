let names: Array<String> = new Array<String>();
names.push('John');
names.push('Doe');
names.forEach(name => console.log(name));

let names1: Array<string> = ['Max', 'Anna'];

type DataStore1<T> = {
    [key: string]: T;
};

let store11: DataStore1<string | boolean> = {};

store11.name = 'Max';
store11.isInstructor = true;

let nameStore: DataStore1<string> = {};

function merge<T, U>(a: T, b: U) {
    return [a, b];
}

const ids = merge(1, 'Max');

function mergeObj<T extends object, U extends object>(a: T, b: U) {
    return { ...a, ...b };
}

const merged = mergeObj({ userName: 'Max' }, { age: 35 });
console.log(merged);

class User1<T> {
    constructor(public id: T) {}
}

const user111 = new User1('i1');
user111.id