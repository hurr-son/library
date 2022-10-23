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
let row = '';
let id = '';
let title = '';
let author = '';
let pages = '';
let status = '';
let remove = '';
let rmButton = '';


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
        
        row = document.createElement('tr')
        id = document.createElement('td')
        title = document.createElement('td')
        author = document.createElement('td')
        pages = document.createElement('td')
        status = document.createElement('td')
        remove = document.createElement('td')
        rmButton = document.createElement('button');
        rmButton.style.padding = '.1rem';
        rmButton.innerHTML = 'X';
        rmButton.classList.add('remove-button');
        
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
        row.appendChild(remove);
        remove.appendChild(rmButton)
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

    rmButton = document.querySelector('.remove-button')
    
})





rmButton.addEventListener('click', function(){
    row.removeChild(id);
    row.removeChild(title);
    row.removeChild(author);
    row.removeChild(pages);
    row.removeChild(status);
    row.removeChild(remove);
    remove.removeChild(rmButton);
    table.removeChild(row);
    
});