let button = document.querySelector('.add-Book');
let content = document.querySelector('.right-Content');
let form = document.querySelector('.book-Form');
let title = document.querySelector('#title');
let author = document.querySelector('#author');
let pages = document.querySelector('#pages');
let read = document.querySelector('input[name="read"]:checked').id;

let divTitle = document.createElement('div');

let divAuthor = document.createElement('div');

let divPages = document.createElement('div');

let divRead = document.createElement('div');

let readBut = document.createElement('button');

let divDelete = document.createElement('div');


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


let b1 = new book("huma1", "me", 100, 'yes');
let b2 = new book("huma12", "3me", 100, 'no');

myLibrary.push(b1);
myLibrary.push(b2);
removeAllContentDiv();
createDivs(myLibrary);
checkButton();
deleteBut();
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
    removeAllContentDiv();
    createDivs(myLibrary);
    checkButton();
    deleteBut();
}


function createDivs(array) {
    for (let i = 0; i < array.length; i++) {
        let divs = document.createElement('div');
        divs.className = 'book-Info';
        content.appendChild(divs); 
        
        divTitle = document.createElement('div');
        divTitle.textContent = myLibrary[i].title;
        divs.appendChild(divTitle);
        
        divAuthor = document.createElement('div');
        divAuthor.textContent = myLibrary[i].author;
        divs.appendChild(divAuthor);
        
        divPages = document.createElement('div');
        divPages.textContent = myLibrary[i].pages;
        divs.appendChild(divPages);
        
        divRead = document.createElement('div');
        divRead.className = 'readDiv';
        // divRead.textContent = myLibrary[i].read;
        divs.appendChild(divRead);
        
        readBut = document.createElement('button');
        readBut.textContent = 'Read?';
        readBut.className = `readBut`;
        if(myLibrary[i].read == 'yes') {
            readBut.style.backgroundColor = 'green';
        }
        else {
            readBut.style.backgroundColor = 'red';
        }
        readBut.id = myLibrary[i].title;
        divRead.appendChild(readBut);

        divDelete = document.createElement('div');
        divs.appendChild(divDelete);
        deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete?';
        deleteButton.className = `deleteBut`;
        deleteButton.id = `${i}`;
        divDelete.appendChild(deleteButton);
    }
}

function checkButton() {
    let allBut = document.querySelectorAll('.readBut');
    allBut.forEach((button) => {
    button.addEventListener('click', (e) => {
        checkRead(e.target.id);
    });
}) 
}

function checkRead(buttonTitle) {
    myLibrary.forEach((book) => {
        if(buttonTitle == book.title) {
            let tempback = document.getElementById(book.title);
            console.log(tempback);
            if (book.read == 'yes') {
                book.read = 'no';
                tempback.style.backgroundColor = 'red';
            }
            else {
                book.read = 'yes';
                tempback.style.backgroundColor = 'green';
            }
        }
    })
    removeAllContentDiv();
    createDivs(myLibrary);
    checkButton();
    deleteBut();
}

function deleteBut() {
    let allBut = document.querySelectorAll('.deleteBut');
    allBut.forEach((button) => {
        button.addEventListener('click', (e) => {
            deleteBook(e.target.id);
        });
    })
} 

function deleteBook(index) {
    let tempArr = myLibrary.splice(index, 1);
    console.log(myLibrary);
    removeAllContentDiv();
    createDivs(myLibrary);
    checkButton();
    deleteBut();
}


function removeAllContentDiv() {
    rightContent = document.getElementById('remove-Content');
    while ( rightContent.firstChild ) {
        rightContent.removeChild( rightContent.firstChild );
    }
}
