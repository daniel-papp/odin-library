function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages; 
    this.read = read;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${read ? "already read" : "not read yet"}.`
    }
}

const theHobbit = new Book('The Hobbit', 'J. R. R. Tolkien', 295, false);
console.log(theHobbit.info());

const neuromancer = new Book('Neuromancer', "William Gibson", 292, true); 
console.log(neuromancer.info());