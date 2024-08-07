const openButton = document.querySelector(".open-btn");
const modal = document.querySelector(".modal");
const bookForm = document.getElementById("bookForm");

openButton.addEventListener("click", () => {
    modal.showModal();
});

bookForm.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const haveRead = document.getElementById("haveRead").checked;

    const newBook = new Book(title, author, pages, haveRead);
    addBookToLibrary(newBook);

    bookForm.reset();
    modal.close();
});

const myLibrary = [];

function Book(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
    this.info = `The ${this.title} by ${this.author} has ${this.pages} pages, ${this.haveRead ? 'already read' : 'not read yet'}`;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    // Further implementation to display the book can be added here
    console.log(myLibrary); // For debugging purposes
}
