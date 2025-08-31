//You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.
// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.
//"test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"
function getMiddle(s: string): string {
    const length = s.length;
    const middle = Math.floor(length / 2);

    return length % 2 === 0 ? s[middle - 1] + s[middle] : s[middle];
}

console.log(getMiddle("tes"));
