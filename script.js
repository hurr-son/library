let table = document.getElementById('library-table');


let myLibrary = [];


function Book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
}

function addBookToLibrary(newBook) {
    myLibrary.unshift(newBook)
    
}

let book1 = new Book('Cookbook', 'Some Person', '545', 'yes');
let book2 = new Book('Guide To Stuff', 'Some Guy', '243', 'no');


addBookToLibrary(book1);
addBookToLibrary(book2);


function displayLibrary() {
    
    for(let book of myLibrary) {

        // Add to an html table element
        
        let row = document.createElement('tr')
        let id = document.createElement('td')
        let title = document.createElement('td')
        let author = document.createElement('td')
        let pages = document.createElement('td')
        let status = document.createElement('td')
        
        id.innerHTML = `${myLibrary.indexOf(book)}`;
        title.innerHTML = `${book.title}`;
        author.innerHTML = `${book.author}`;
        pages.innerHTML = `${book.pages}`;
        status.innerHTML = `${book.status}`;

        // Append element to DOM to display on page
        
        row.appendChild(id);
        row.appendChild(title);
        row.appendChild(author);
        row.appendChild(pages);
        row.appendChild(status);
        table.appendChild(row)
       
    }
}
    
    
displayLibrary()





