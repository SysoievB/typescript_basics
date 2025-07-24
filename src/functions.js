function add(a, b) {
    return a + b;
}
console.log(add(2, 7));
function print() {
    console.log("Hello World");
}
print();
function logAndThrow(errorMessage) {
    console.log(errorMessage);
    throw new Error(errorMessage);
}
//logAndThrow("Error...")
//function as types
var logMsg = function (msg) { return console.log(msg); };
function performJob(cb) {
    cb("Job done");
}
performJob(logMsg);
//optional parameter
function printMe(ms) {
    console.log("Hello " + ms);
}
printMe("Me"); //Hello Me
printMe(); //Hello undefined
