// the basic/primitive types

// string, number, boolean
let someName: string = 'Kaboom';
let someNumber: number = 100;
let deploy: boolean = true;

// declare only
let job: string;

// error: use before assignment
// console.log(job) // error

// assign value
job = 'Developer';

// type inference
// implicitly inferred as a string type
let hiThere = 'Hello Kaboom!';

// any type
// only use any when you're absolutely uncertain about the data-type
// in that case perhaps add run-time type checking to prevent bugs
let unknown: any = 'Unknown ?';
unknown = 12; // accepted
console.log(unknown);
