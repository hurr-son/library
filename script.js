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
let rmButton = undefined;


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
        
function createTableElements(){  

        row = document.createElement('tr')
        id = document.createElement('td')
        title = document.createElement('td')
        author = document.createElement('td')
        pages = document.createElement('td')
        status = document.createElement('td')
        remove = document.createElement('td')
      }

function createDeleteButton(){

    rmButton = document.createElement('button');
    rmButton.style.padding = '.1rem';
    rmButton.innerHTML = 'X';
    rmButton.classList.add('remove-button');
}
        
function insertTableData(){

        id.innerHTML = `${book.id}`;
        title.innerHTML = `${book.title}`;
        author.innerHTML = `${book.author}`;
        pages.innerHTML = `${book.pages}`;
        status.innerHTML = `${book.status}`;
    }

function appendTableElements(){ 

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

book = new Book('Lord of Rings', 'Tolkien', '545', 'Yes');

addBookToLibrary(book)
    createTableElements()
    insertTableData()
    appendTableElements()



addButton.addEventListener('click', function() {
    
    book =  new Book(`${titleInput.value}`, `${authorInput.value}`, `${pageInput.value}`, `${read}`)
    addBookToLibrary(book)
    createTableElements()
    insertTableData()
    appendTableElements()
})

