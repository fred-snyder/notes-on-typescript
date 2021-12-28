// interface functions

// interface function that take two numbers as arguments
// and returns a tuple of numbers
interface AddValToInputNumber {
    (num1: number, num2: number): [ret1: number, ret2: number];
}

const addOne: AddValToInputNumber = (
    n1: number,
    n2: number
): [r1: number, r2: number] => {
    return [n1 + 1, n2 + 1];
};

const addTwoHundred: AddValToInputNumber = (
    num1: number,
    num2: number
): [ret1: number, ret2: number] => {
    return [num1 + 200, num2 + 200];
};

const addThreeHundred: AddValToInputNumber = (num1, num2) => {
    return [num1 + 300, num2 + 300];
    // return ["Hello", "World"] // this will error
    // return true // this will error
};

console.log(addThreeHundred(2, 4));

// the parameters in example 300 are not explicitly typed in the function declaration
// but because the function implements the AddValToNumber interface
// the parameters- and return-types must be compatible with the interface description
// addThreeHundred(true, false)
