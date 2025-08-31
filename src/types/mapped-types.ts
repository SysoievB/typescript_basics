type Operations = {
    add: (a: number, b: number) => number;
    subtract: (a: number, b: number) => number;
};

/*type Results<T> = {
    -readonly [Key in keyof T]?: number;//? makes each property optional, -readonly - Removes the readonly modifier if it exists in T.
};*/

type Results = {
    add: number,
    subtract: number
};

let mathOperations: Operations = {
    add(a: number, b: number) {
        return a + b;
    },
    subtract(a: number, b: number) {
        return a - b;
    }
}

let mathResults: Results = {
    add: mathOperations.add(10, 22),
    subtract: mathOperations.subtract(33, 22)
};

console.log(mathResults);

//the readonly modifier in TypeScript is used to make object properties or array
// elements immutable after they are initialized
type Settings1 = {
    readonly difficulty: string;
    readonly midLevel: number;
};

const settings1: Settings1 = {
    difficulty: "easy",
    midLevel: 10,
};

//settings1.difficulty = "hard"; // ❌ Error: Cannot assign to 'difficulty' because it is a read-only property.
