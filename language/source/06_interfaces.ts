// interfaces

// From https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
// "You should prefer interface. Use type when you need specific features.""

interface BookCatalog {
    id: number;
    title: string;
    books: Book[];
    readonly popular: boolean; // a readonly property
}

interface Book {
    id: number;
    title: string;
    onSale: boolean;
    year?: number; // optional property
}

// objects that implement an interface
const book1: Book = {
    id: 3522,
    title: 'Count of Monte Christo',
    onSale: false,
};

const book2: Book = {
    id: 3523,
    title: 'Blade Runner',
    onSale: false,
    year: 1985,
};

const cat1: BookCatalog = {
    id: 34235423,
    title: 'Fiction',
    books: [book1, book2],
    popular: false,
};

// error: can not set read-only property
// cat1.popular = true
