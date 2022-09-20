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

// Function for creating book cards and placing them into the main book-area

function populateBookArea() {
    const bookArea = document.querySelector('.book-area');

    for (let book of myLibrary) {
        const newBookCard = document.createElement('div');
        newBookCard.classList.add('book-card');
        bookArea.appendChild(newBookCard);

        const newBookTitle = document.createElement('h3');
        newBookTitle.textContent = book.title;
        newBookCard.appendChild(newBookTitle);

        const newBookAuthor = document.createElement('p');
        newBookAuthor.textContent = book.author;
        newBookCard.appendChild(newBookAuthor);

        const newBookPages = document.createElement('p');
        newBookPages.textContent = book.pages;
        newBookCard.appendChild(newBookPages);

        const newBookRead = document.createElement('p');
        newBookRead.textContent = book.read;
        newBookCard.appendChild(newBookRead);
    }
}



// Test book

const neuromancer = new Book('Neuromancer', "William Gibson", 292, true); 
const countZero = new Book('Count Zero', "William Gibson", 256, true); 
const monaLisaOverdrive = new Book('Mona Lisa Overdrive', "William Gibson", 308, true); 

myLibrary.push(neuromancer, countZero, monaLisaOverdrive);