// union
let testValue: number | boolean = 1;
testValue = true;

// or create a new type from a union
// you can call this a type alias
type WindowStates = 'open' | 'closed' | 'minimized';
type LockStates = 'locked' | 'unlocked';
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

// enum type
// you can use enums to describe a set of constants
// https://www.typescriptlang.org/docs/handbook/enums.html
enum Months {
    //! enum defaults to: 0, 1, 2, 3, etc
    January = 1,
    February,
    March,
}

console.log(Months.February); // 2
console.log(Months[1]); // January

const blog = {
    // the value of the month property is stored as number 2
    month: Months.February,
};

// string enums example
enum JobTitle {
    Director = 'Director of company',
    Manager = 'Team manager',
}

// so an enum replaces something like:
const director = 'Director of company';
const manager = 'Team manager';

// the value of signedBy becomes "Director of company"
const contract = {
    signedBy: JobTitle.Director,
};

// type assertion
// https://www.typescriptlang.org/docs/handbook/basic-types.html#type-assertions
let id: any = 1;
let bookId = <number>id;
let userId = id as number;
userId = 0;
