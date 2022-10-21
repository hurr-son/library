let table = document.getElementById('library-table');
let titleInput = document.getElementById('title');
let authorInput = document.getElementById('author');
let pageInput = document.getElementById('pages');
let yesInput = document.getElementById('yes');
let noInput = document.getElementById('no');
let addButton = document.getElementById('addButton');
let read = '';
let book = {};

let myLibrary = [];


function Book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
}



function addBookToLibrary(newBook) {
    myLibrary.push(newBook)
    newBook.id = myLibrary.indexOf(newBook);
}








function displayLibrary() {
    
    
        
        // Add to an html table element
        
        let row = document.createElement('tr')
        let id = document.createElement('td')
        let title = document.createElement('td')
        let author = document.createElement('td')
        let pages = document.createElement('td')
        let status = document.createElement('td')
        
        id.innerHTML = `${book.id}`;
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



yesInput.addEventListener('click', function() {
    if(yesInput.checked === true) {
        read = 'Yes'
     }
})
noInput.addEventListener('click', function() {
    if(noInput.checked === true) {
        read = 'No'
     }
})

addButton.addEventListener('click', function() {
    
    book =  new Book(`${titleInput.value}`, `${authorInput.value}`, `${pageInput.value}`, `${read}`)
    addBookToLibrary(book)
    displayLibrary()

})




