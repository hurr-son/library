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
let readSelect = '';
let checkMark = '';


function Book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
}

Book.prototype.getID = function() {
    this.id = myLibrary.indexOf(this)
}



function addBookToLibrary(newBook) {
    myLibrary.push(newBook)
    newBook.getID()
}
        
function createTableElements(){  

        row = document.createElement('tr');
        id = document.createElement('td');
        title = document.createElement('td');
        author = document.createElement('td');
        pages = document.createElement('td');
        select = document.createElement('td');
        checkMark = document.createElement('input');
        checkMark.type = 'checkbox';
        readSelect = document.createElement('SELECT');
        let option1 = document.createElement('option');
        let option2 = document.createElement('option');
        option1.text = 'Yes';
        option2.text = 'No';
        readSelect.add(option1);
        readSelect.add(option2);
        
        console.log(checkMark);
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
        readSelect.value = read
        
    }

function appendTableElements(){ 

        row.appendChild(id);
        row.appendChild(title);
        row.appendChild(author);
        row.appendChild(pages);
        row.appendChild(readSelect);
        row.appendChild(select);
        select.appendChild(checkMark);
        table.appendChild(row);
    }


function deleteBook() {
    if(checkMark.checked === true) {
     return checkMark.parentNode
    }
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

console.log(table.children[1].children[0].innerHTML);