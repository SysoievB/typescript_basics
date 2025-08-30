//Complete the method/function so that it converts dash/underscore delimited
// words into camel casing. The first word within the output should be
//capitalized only if the original word was capitalized (known as Upper Camel Case,
// also often referred to as Pascal case). The next words should be always capitalized.
// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str: string): string {
    const arr = str.replace(/_/g, '-')  // Replace ALL underscores with hyphens
        .replace(/-/g, ' ')  // Replace ALL hyphens with spaces
        .split(' ');
    for (let i = 0; i < arr.length; i++) {
        if (i != 0) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
    }
    return arr.join('');
}

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));
console.log(toCamelCase("The_Stealth-Warrior"));