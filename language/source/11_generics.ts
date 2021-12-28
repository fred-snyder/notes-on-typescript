// generics
// build re-usable components
// https://www.typescriptlang.org/docs/handbook/2/generics.html

// function that takes any type of array as argument
function returnArr(items: any[]): any[] {
    return new Array().concat(items);
}

let numArr1 = returnArr([100, 200, 300]);
let stringArr1 = returnArr(['Fred', 'Kaboom', 'Bill']);

numArr1.push('Hans');

// the generic version uses type placeholders <T>
function returnGenericArr<T>(items: T[]): T[] {
    return new Array().concat(items);
}

// because we created a Type variable we can now capture the type the user provides
let numGenArr = returnGenericArr<number>([100, 200, 300]);
let stringGenArr = returnGenericArr<string>(['Fred', 'Kaboom', 'Bill']);

// error: the numGenArr is now defined as number[]
// numGenArr.push('Hans');
stringGenArr.push('Hans'); // allowed

console.log(numGenArr);
console.log(stringGenArr);

// more info
//
// you can name the a type variable anything you want
// convention is <Type> or <T> for short
function retGenericArr_example<Type>(items: Type[]): Type[] {
    return new Array().concat(items);
}

// or:
function retGenericArr_anotherExample<Blabla>(items: Blabla[]): Blabla[] {
    return new Array().concat(items);
}
