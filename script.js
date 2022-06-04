let myLibrary = [];

function book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `The ${title} by ${author}, ${pages} pages, ${read}`;        
    }
}

function addBookToLibrary() {
    
}

