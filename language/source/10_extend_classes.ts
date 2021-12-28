// extend classes

// instead of passing all these properties to the interface
// and the class that implements that interface
// create a new type that is reusable
type Person = {
    id: number;
    name: string;
    description: string;
};

interface UserInterface {
    user: Person;
}

// implement classes according to the interface
class UserAccount implements UserInterface {
    user: Person;

    constructor(person: Person) {
        this.user = person;
    }
}

// extend the User class with extra properties
class Employee extends UserAccount {
    jobTitle: string;

    constructor(person: Person, jobTitle: string) {
        // call super so that the constructor from the User class also executes
        super(person);
        this.jobTitle = jobTitle;
    }
}

// create a object of type Person
const person1: Person = {
    id: 101,
    name: 'Fred',
    description: 'A developer',
};

// type declaration is optional
// as long as the type adhers to the class specification
const person2 = {
    id: 102,
    name: 'Fred',
    description: 'A developer',
};

// now instantiate some class objects
// and pass the Person objects as an argument
const User1 = new UserAccount(person1);
const User2 = new UserAccount(person2);
const User3 = new UserAccount({
    id: 103,
    name: 'Hans',
    description: 'A banker',
});

// now with the subclasses
// pass a Person object as well as a jobTitle
const Employee1 = new Employee(
    { id: 104, name: 'Kaboom', description: 'Works for Kaboom' },
    'A baker'
);
const Employee2 = new Employee(person1, 'A baker');

// console.log all the objects
console.log(User1);
console.log(User2);
console.log(User3);
console.log(Employee1);
console.log(Employee2);
