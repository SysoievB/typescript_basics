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