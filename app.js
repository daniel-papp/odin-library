function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages; 
    this.read = read;
}

// It is best to define functions (methods) on the prototype of that object. Doing so means that a single instance
// of the function will be shared between all of the Book object. Defining the function in the constructor would
// duplicate the function each time an object is created.

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "already read" : "not read yet"}.`
}

const theHobbit = new Book('The Hobbit', 'J. R. R. Tolkien', 295, false);
console.log(theHobbit.info());

const neuromancer = new Book('Neuromancer', "William Gibson", 292, true); 
console.log(neuromancer.info());