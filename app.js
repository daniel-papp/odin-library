// Initializing the library array for storing books

let myLibrary = [];

// The Book constructor and info method

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages; 
    this.read = read;
}

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "already read" : "not read yet"}.`
}

// Function for asking user info, creating a new book and adding it to the library

function addBookToLibrary() {
    const newBookTitle = prompt('What is the title?');
    const newBookAuthor = prompt('Who wrote it?');
    const newBookPages = prompt('How many pages long is the book?');
    const newBookRead = prompt('Have you read it?');

    const newBook = new Book(newBookTitle, newBookAuthor, newBookPages, newBookRead);
    newBook.info();
    
    myLibrary.push(newBook);
    
    return newBook.info();

}



// Test book

const neuromancer = new Book('Neuromancer', "William Gibson", 292, true); 
console.log(neuromancer.info());