console.log(typeof "hello"); // "string"
console.log(typeof 42);      // "number"
console.log(typeof {});      // "object"

let person = {name: "Alice", age: 25};
//typeof lets you extract the type of a variable, constant, or function and reuse it for type checking.
type Person = typeof person;
// Equivalent to: type Person = { name: string; age: number };

const anotherPerson: Person = {
    name: "Bob",
    age: 30
};

//With functions
function greet(msg: string) {
    console.log(msg);
}

type GreetFn = typeof greet;
// Equivalent to: type GreetFn = (msg: string) => void

const myGreet: GreetFn = (text) => console.log("Hello " + text);

//usefull example
const settings = {
    difficulty: 'easy',
    midLevel: 10,
    didStart: false,
    players: ["John", "Sam"]
};
// This is your "blueprint" for what a settings object looks like
/*type Settings = {
    difficulty: string,
    midLevel: number,
    didStart: boolean,
    players: string[],
}*/
//Even shorter with typeof
// "typeof settings" grabs the *type* from your object
type Settings = typeof settings;

// This function requires an argument that matches that blueprint
/*function loadData(settings: Settings) {
    console.log(settings);
}*/

//Even more shorter with typeof
function loadData(s: typeof settings) {
    console.log(s);
}

loadData(settings);

console.log('-----------------keyof-----------------')
const user100 = {
    id: 1,
    username: "admin"
};

type UserKeys = keyof typeof user100;// "id" | "username"
//usefull example
function getProp<T extends object, U extends keyof T>(obj: T, key: U) {
    const val = obj[key];
    if (val === undefined || val === null) {
        throw new Error("Invalid value");
    }
    return val;
}

const data = {id: 1, isStored: false, values: [1, -5, 100]};
const isStored = getProp(data, "isStored");
console.log(isStored);