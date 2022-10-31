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

// Refactoring addBookToLibrary

function createNewBook(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);

    const newBookArray = [newBook];
    populateBookArea(newBookArray);
}

function getBookInfo() {
    const newBookTitle = document.getElementById('title')['value'];
    const newBookAuthor = document.getElementById('author')['value'];
    const newBookPages = parseInt(document.getElementById('pages')['value']);
    const newBookRead = document.getElementById('read')['checked'];

    createNewBook(newBookTitle, newBookAuthor, newBookPages, newBookRead);

    animateNewBookcard();
    setTimeout(deactivateNewBookCard, 500);
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

        const newBookRead = document.createElement('button');
        newBookRead.textContent = book.read ? 'Read' : 'Not read';
        newBookRead.classList.add(book.read ? 'read' : 'not-read');
        newBookCard.appendChild(newBookRead);

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        newBookCard.appendChild(deleteButton);

        const deleteIcon = document.createElement('img');
        deleteIcon.setAttribute('src', './icons/trash-can-outline.svg');
        deleteIcon.setAttribute('alt', 'trashcan icon');
        deleteButton.appendChild(deleteIcon);

        deleteButton.addEventListener('click', deleteBook);
        newBookRead.addEventListener('click', changeStatus);
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

    addButton.addEventListener('click', () => getBookInfo());

    setTimeout(animateNewBookcard, 10);

}

function animateNewBookcard() {
    const newBookCard = document.querySelector('.new-book-card');
    if (!newBookCard.className.includes('visible')) {
        newBookCard.classList.add('visible');
    } else {
        newBookCard.classList.remove('visible');
    }
}

// Deactivate new book form 

function deactivateNewBookCard() {
    const bookArea = document.querySelector('.book-area');
    const newBookCard = document.querySelector('.new-book-card');

    bookArea.removeChild(newBookCard);
}


// Deleting books from the library array and the DOM

function deleteBook(e) {
    const bookCard = e.currentTarget.parentNode;
    
    const titleToDelete = bookCard.children[0].innerText;
    
    for (let book of myLibrary) {
        if (book.title === titleToDelete) {
            myLibrary.splice(myLibrary.indexOf(book), 1)
        }
    }

    bookCard.remove();
}

// Read status change

function changeStatus(e) {
    const bookCard = e.target.parentNode;

    const title = bookCard.children[0].innerText;
    const status = bookCard.children[3].innerText;

    for (let book of myLibrary) {
        if (book.title === title) {
            if (book.read) {
                book.read = false;
                bookCard.children[3].innerText = 'Not read';
                e.target.classList.remove('read');
                e.target.classList.add('not-read');
            } else {
                book.read = true;
                bookCard.children[3].innerText = 'Read';
                e.target.classList.remove('not-read');
                e.target.classList.add('read');
            }
        }
    }
}

// Preloaded books

createNewBook('Neuromancer', "William Gibson", 292, true);
createNewBook('Count Zero', "William Gibson", 256, true);
createNewBook('Mona Lisa Overdrive', "William Gibson", 308, false);