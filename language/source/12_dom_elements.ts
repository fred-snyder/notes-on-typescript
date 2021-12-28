// store an HTML input element in a variable
// add an exclamation mark to tell Typescript that this element definitely exists
// and use type assertion to tell TS what kind of HTML element is selected
const input = document.getElementById('dom-input')! as HTMLInputElement;

const log = () => {
    console.log(input.value);
};

// remember that HTML user input is always parsed as a string
