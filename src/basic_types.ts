let age: any = 23;
age = "23";
age = {};
age = false;

let name1: string = "Vasia";
console.log(name1);

let surname: string | number | object = {name: "vasia"};//use this instead of any
console.log(surname);

let arr = ["swimming", "cooking"];
let users: (string | number) [] = [];
users.push(1);
users.push("Vasia");
users.forEach(item => console.log(item));

//tuples
let tuple: [number, number] = [1, 0];

//object
let user: {
    name: string,
    age: string | number,
    hobbies: string[],
    roles: {
        description: string,
        id: number
    }
} = {
    name: "Max",
    age: 34,
    hobbies: ["cooking"],
    roles: {
        description: 'admin',
        id: 1
    }
};

//must not be null type
let val: {} = 'any text';
//let val1: {} = null; not compile

//record type - Represents an object with known keys and value types, typing for key-value object structures
let myRecord: Record<number, string> = {
    1: "Alice",
    2: "Bob"
};

//Enum
enum Roles {
    Admin,
    Editor,
    Guest
}
//enum alternative
let userRoleVar: 'admin' | 'editor' | 'guest' = 'admin';

let userRole: Roles = Roles.Admin;

//null type
let a: null | string;
a = null;
a= 'Hi!';

//any vs undefined vs unknown
function getValue(): any {
    return "hello"; // or return 42, {}, [], true, etc.
}
let result = getValue();
result.toUpperCase(); // compiles fine, even if result is not a string!

function doNothing(): undefined {
    return undefined; // must explicitly return undefined
}

let value1: unknown = "hello";
//value1.toUpperCase(); // ❌ Error: Object is of type 'unknown'
if (typeof value1 === "string") {
    console.log(value1.toUpperCase()); // ✅ Safe
}

//nullish coalescing operator
//let result = value ?? defaultValue;
// “If value is null or undefined, use defaultValue; otherwise, use value.”
let userInput: string | null = null;

let name3 = userInput ?? "Anonymous";
console.log(name3); // "Anonymous"


//