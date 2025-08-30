// Shortest Word
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.
function findShort(s: string): number {
    const word = s.split(' ')
        .reduce((word, next) => word.length > next.length ? next : word);
    return word.length;
}

console.log(findShort("hello world rererer"));