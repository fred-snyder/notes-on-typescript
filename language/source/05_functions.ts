// functions

// string and number parameters, return a new string
function nameAge(name: string, age: number): string {
    return `You're name is ${name}, and you are ${age} years old.`;
}

nameAge('Fred', 36);

// string or number as parameter
// plus an OPTIONAL parameter
// and explicitly tell TS that the function has no return value
function logNumber(number: string | number, text?: string): void {
    console.log('Optional argument is:', text);
    console.log(number);
}

logNumber(100);
logNumber('100');

// setting a default parameter value automatically makes that parameter optional
function logSomethingElse(
    number: string,
    text: string = 'Default optional text'
): void {
    console.log(text);
    console.log(number);
}

logSomethingElse('100');

// in JS you harden functions at runtime: check type and throw exception, however
// in TS you just have to make sure that all variables in your code
// include the correct type signatures
function logNumberStrict(num: number): void {
    if (typeof num !== 'number') {
        throw new Error('Input is not a number');
    }
    console.log(num);
}

//! important side-note: the TS type-checking only runs in development.
// so if there is a possibility that during execution
// a non-number type is passed as input
// then it could be helpful to do some strict type checking
let inputNumber: number;
inputNumber = 12;
logNumberStrict(inputNumber);

// store a Function in variable
// the following syntax is not explicit about the parameters
let storeFunction: Function;
// same as: let storeFunction: () => any;
// you can tell TS the parameter and return types of the function
let storeSpecificFunction: (s: string) => void;
storeSpecificFunction = console.log;
storeSpecificFunction('Console output');

// you can use function type definition in a callback structure
// by specifying the void return type we are telling TS
// the return value of the callback is not used in the input function
// an input function that returns a value is allowed
function callbackExample(input: string, cb: (s: string) => void) {
    cb(input);
}

callbackExample('Hi there', console.log);
callbackExample('Hi Fred', (s) => {
    console.log(s);
});
