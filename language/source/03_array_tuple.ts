// arrays
let numberArr: number[] = [100, 200, 300];
let stringArr: string[] = ['Java', 'Go', 'Rust'];
let anyArr: any[] = ['Microsoft', 1980, true];
numberArr.push(400);
stringArr.push('Kotlin');
anyArr.push([10, 20, 30]);

// tuples
// TS also add a fixed type and length array: a tuple
let someTuple: [number, string] = [12, 'People'];

// an array of tuples
let anotherTuple: [number, boolean][] = [
    [12, true],
    [14, false],
];
