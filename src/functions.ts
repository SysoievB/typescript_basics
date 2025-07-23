function add(a: number, b: number): number {
    return a + b;
}

console.log(add(2, 7));

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
