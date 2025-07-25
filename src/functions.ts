function add(a: number, b: number = 0): number {//zero is a default param
    return a + b;
}

console.log(add(2, 7));
console.log(add(2));

function print(): void {
    console.log("Hello World");
}

print();

function logAndThrow(errorMessage: string): never {
    console.log(errorMessage);
    throw new Error(errorMessage);
}

//logAndThrow("Error...")
//function as types
const logMsg =  (msg: string) => console.log(msg);

function performJob(cb: (m: string) => void) {
    cb("Job done");
}
performJob(logMsg);

//optional parameter
function printMe(ms?: string) {
    console.log("Hello " + ms);
}

printMe("Me");//Hello Me
printMe();//Hello undefined

//rest params
const add1 = (...numbers: number[]) => {
    return numbers.reduce((a, b) => a + b, 0);
};

console.log(add1(1,2,3,4,5));//15