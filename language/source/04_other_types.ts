// some other TS types

// unknown type
// the type will be inferred after a value assignment
// better to avoid unless necessary, but better then using the any type
let notKnown: unknown;
let isKnown: string;

notKnown = 5;
// isKnown = notKnown; // this will error
if (typeof notKnown === 'string') {
    isKnown = notKnown; // this will not error
    // because TS detects the explicit if-type-check
}

// the Function type
let functionPointer: Function;
functionPointer = console.log;
functionPointer('Console output');

// undefined type
const notVeryUseful: undefined = undefined;

// the never type
// a function that throws an error returns the never type
// because the execution is stopped the function never returns
// the never type exists to make the code intentions extra clear
function throwSomeError(): never {
    throw {
        errorCode: 404,
        errorName: 'Not found',
    };
}

throwSomeError();

// VSCode displays this code in greyed out text because it will never execute
const errorResult = throwSomeError();
console.log(errorResult);
