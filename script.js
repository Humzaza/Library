let button = document.querySelector('.add-Book');
let content = document.querySelector('.bot-Content');
let form = document.querySelector('.book-Form');
let title = document.querySelector('#title').value;
let author = document.querySelector('#author').value;
let pages = document.querySelector('#pages').value;
let read = document.querySelector('#read').value;


let myLibrary = [];

button.addEventListener('click', (e) => {
    title = document.querySelector('#title').value;
    author = document.querySelector('#author').value;
    pages = document.querySelector('#pages').value;
    read = document.querySelector('#read').value;
    console.log(read);
});
button.addEventListener('click', addBookToLibrary(title, author, pages, read));



function book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `The ${title} by ${author}, ${pages} pages, ${read}`;        
    }
}

// let b1 = new book("huma1", "me", 100, true);
// myLibrary.push(b1);
// console.log(myLibrary[0]);

function addBookToLibrary(title, author, pages, read) {
    let newBook = new book(title, author, pages, read);
}

