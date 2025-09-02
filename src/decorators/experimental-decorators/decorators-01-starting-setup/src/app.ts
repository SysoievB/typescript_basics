function Logger(constructor: Function) {
    console.log("Logging...");
    console.log(constructor);
}

function LoggerFactory(logString: string) {
    return function(constructor: Function) {
        console.log("Factory Logging...");
        console.log(logString);
        console.log(constructor);
    }
}

@Logger
@LoggerFactory('LOGGING - PERSON')
class Person {
    name = "Max";

    constructor() {
        console.log("Creating person object")
    }
}

const person = new Person();
console.log(person);