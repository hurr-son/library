let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary(newBook) {
    myLibrary.unshift(newBook)

}

let book1 = new Book('Cookbook', 'Some Person', '545', 'yes');
let book2 = new Book('Guide To Stuff', 'Some Guy', '243', 'no');


addBookToLibrary(book1);
addBookToLibrary(book2);
console.log(myLibrary);






