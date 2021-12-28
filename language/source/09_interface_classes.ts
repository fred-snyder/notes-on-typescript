// interface classes

//QUESTION: How does the use of JS Classes compare to using TS Types/Interfaces
//ANSWER: you can use interfaces and types as additional building blocks and class-blueprints

// every class that implements this interface
// has the following object properties
// so an interface can function as a class blueprint
interface RenderInterface {
    id: number;
    category: string;
    spaces: string[];
    description: string;
    done: boolean;
    updateStatus(b: boolean): boolean;
    status(): boolean;
}

class Render implements RenderInterface {
    id: number;
    category: string;
    spaces: string[];
    description: string;
    done: boolean;

    constructor() {
        this.id = 0;
        this.category = '';
        this.spaces = [];
        this.description = '';
        this.done = false;
        console.log('Created');
    }

    updateStatus(b: boolean): boolean {
        return (this.done = b);
    }

    status(): boolean {
        return this.done;
    }
}

// instantiate a new Render object
const renderKaboom = new Render();

console.log(renderKaboom.status()); // undefined
console.log(renderKaboom.updateStatus(true));
console.log(renderKaboom.status()); // true

// error: this class does not correctly implements the RenderInterface
// the updateStatus() and status() class methods are missing
//
// class RenderExterior implements RenderInterface {
//     id: number;
//     category: string;
//     spaces: string[];
//     description: string;
//     done: boolean;
// }
