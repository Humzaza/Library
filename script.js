let button = document.querySelector('.add-Book');
let content = document.querySelector('.right-Content');
let form = document.querySelector('.book-Form');
let title = document.querySelector('#title');
let author = document.querySelector('#author');
let pages = document.querySelector('#pages');
let read = document.querySelector('input[name="read"]:checked').id;


let myLibrary = [];

button.addEventListener('click', (e) => {
    title = document.querySelector('#title').value;
    author = document.querySelector('#author').value;
    pages = document.querySelector('#pages').value;
    read = document.querySelector('input[name="read"]:checked').id;
    addBookToLibrary(title, author, pages, read);
});

function book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `The ${title} by ${author}, ${pages} pages, ${read}`;        
    }
}


let b1 = new book("huma1", "me", 100, true);
let b2 = new book("huma12", "3me", 100, false);

myLibrary.push(b1);
myLibrary.push(b2);
console.log(myLibrary);


function contains (array, title) {
    if (array.some(e => e.title === title)) {
        return true;
    }
    else {
        return false;
    }
}


function addBookToLibrary(title, author, pages, read) {
    let newBook = new book(title, author, pages, read);
    if(!contains(myLibrary, title) && title != '') {
        myLibrary.push(newBook);
    }
    else {
        alert("book already here");
    }
    createDivs(myLibrary.length);
}


function createDivs(arrayLength) {
    for (let i = 0; i < arrayLength; i++) {
        let divs = document.createElement('div');
        divs.className = 'book-Info';
        content.appendChild(divs);  
    }
}

