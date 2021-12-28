// objects

// declare and assign a new object
// note that specifying the object type is redundant because it's inferred by TS
const player: object = {
    name: 'Fred',
};

// better to let Typescript infer the properties itself
const player2 = {
    name: 'John',
};

// or, the below type signature is more helpful, because
// the types of the properties are explicitly defined
const player3: { name: string } = {
    name: 'Hans',
};

// another example: declare object and key-type pairs for the properties
// and assign values to the object
const user: {
    id: number;
    name: string;
} = {
    id: 19284,
    name: 'Fred',
};

// declare a new type: User
// you can also define an object as a custom type
type User = {
    id: number;
    name: string;
    newsletter: false;
};

// declare object of type User
// and assign values
const user2: User = {
    id: 37824,
    name: 'Kaboom',
    newsletter: false,
};
