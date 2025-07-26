/*class User {
    id: number;
    userName: string;

    constructor(id: number, userName: string) {
        this.id = id;
        this.userName = userName;
    }
}*/

//shortcut
class User {
    constructor(public readonly id: number, private name: string) {
    }

    greeting(): string {
        return `Hello ${this.name}`;
    }

    get firstName(): string {
        return `${this.name}`;
    }
}

//readOnly == Java final
//if field readOnly it`s not possible to change it
//i need to compile it with -> tsc classes.ts
const user1 = new User(1, "Vasia");
//user1.id = 2;
console.log(user1);
console.log(user1.greeting());
console.log(user1.firstName);

class Car {
    protected _name: string;//protected made for availability in ancestors
    private _age: number;
    static readonly PI: number = 3.14;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    get getName(): string {
        return this._name;
    }

    getAge(): number {
        return this._age;
    }

    set setName(name: string) {
        this._name = name;
    }

    set setAge(age: number) {
        this._age = age;
    }
}

const car = new Car("BMW", 3);
car.setName = "Volvo";
console.log(car.getName);
console.log(Car.PI);

class Bike extends Car {
    constructor(_name: string, _age: number) {
        super(_name, _age);
    }

    work() {
        console.log(this._name);
    }
}
