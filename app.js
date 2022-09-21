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
    const newBookTitle = document.getElementById('title')['value'];
    const newBookAuthor = document.getElementById('author')['value'];
    const newBookPages = document.getElementById('pages')['value'];
    const newBookRead = document.getElementById('read')['value'];

    const newBook = new Book(newBookTitle, newBookAuthor, newBookPages, newBookRead);

    const newBookArray = [newBook];
    populateBookArea(newBookArray);
    
    myLibrary.push(newBook);
    
    return newBook.info();

}

// Function for creating book cards and placing them into the main book-area

function populateBookArea(bookArray) {
    const bookArea = document.querySelector('.book-area');

    for (let book of bookArray) {
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

// New book button

const newBookButton = document.getElementById('new-book-btn');
newBookButton.addEventListener('click', () => activateNewBookCard());

// Create new book form

function activateNewBookCard() {
    const bookArea = document.querySelector('.book-area');
    const newBookCard = document.createElement('div');
    const newBookForm = document.createElement('form');
    const formHeader = document.createElement('h3');
    const titleLabel = document.createElement('label');
    const titleInput = document.createElement('input');
    const authorLabel = document.createElement('label');
    const authorInput = document.createElement('input');
    const pagesLabel = document.createElement('label');
    const pagesInput = document.createElement('input');
    const readLabel = document.createElement('label');
    const readInput = document.createElement('input');
    const addButton = document.createElement('button');

    newBookCard.classList.add('new-book-card');
    newBookForm.classList.add('new-book-form');

    formHeader.textContent = 'Add new book';
    titleLabel.textContent = 'Title';
    authorLabel.textContent = 'Author';
    pagesLabel.textContent = 'Number of pages';
    readLabel.textContent = 'Already read';
    addButton.textContent = 'Add book';

    titleLabel.setAttribute('for', 'title');
    authorLabel.setAttribute('for', 'author');
    pagesLabel.setAttribute('for', 'pages');
    readLabel.setAttribute('for', 'read');

    titleInput.setAttribute('type', 'text');
    authorInput.setAttribute('type', 'text');
    pagesInput.setAttribute('type', 'tel');
    readInput.setAttribute('type', 'checkbox');
    addButton.setAttribute('type', 'button');

    titleInput.setAttribute('name', 'title');
    authorInput.setAttribute('name', 'author');
    pagesInput.setAttribute('name', 'pages');
    readInput.setAttribute('name', 'read');

    titleInput.setAttribute('id', 'title');
    authorInput.setAttribute('id', 'author');
    pagesInput.setAttribute('id', 'pages');
    readInput.setAttribute('id', 'read');
    addButton.setAttribute('id', 'add-book-btn');
  
    bookArea.appendChild(newBookCard);
    newBookCard.appendChild(newBookForm);
    newBookForm.appendChild(formHeader);
    newBookForm.appendChild(titleLabel);
    newBookForm.appendChild(titleInput);
    newBookForm.appendChild(authorLabel);
    newBookForm.appendChild(authorInput);
    newBookForm.appendChild(pagesLabel);
    newBookForm.appendChild(pagesInput);
    newBookForm.appendChild(readLabel);
    newBookForm.appendChild(readInput);
    newBookForm.appendChild(addButton);

    addButton.addEventListener('click', () => addBookToLibrary());
    
}



// Test books

const neuromancer = new Book('Neuromancer', "William Gibson", 292, true); 
const countZero = new Book('Count Zero', "William Gibson", 256, true); 
const monaLisaOverdrive = new Book('Mona Lisa Overdrive', "William Gibson", 308, true); 

myLibrary.push(neuromancer, countZero, monaLisaOverdrive);
myLibrary.push(neuromancer, countZero, monaLisaOverdrive);
myLibrary.push(neuromancer, countZero, monaLisaOverdrive);
myLibrary.push(neuromancer, countZero, monaLisaOverdrive);
myLibrary.push(neuromancer, countZero, monaLisaOverdrive);
myLibrary.push(neuromancer, countZero, monaLisaOverdrive);



populateBookArea(myLibrary);