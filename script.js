let table = document.getElementById('library-table');
let titleInput = document.getElementById('title');
let authorInput = document.getElementById('author');
let pageInput = document.getElementById('pages');
let yesInput = document.getElementById('yes');
let noInput = document.getElementById('no');
let addButton = document.getElementById('addButton');
let deleteButton = document.getElementById('deleteButton');
let read = '';
let book = {};
let myLibrary = [];
let readSelect = '';
let rows = [];
let xButton = '';
let xButtons = [];


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
    readSelect = document.createElement('SELECT');
    buttonTd = document.createElement('td')
    xButton = document.createElement('button')
    xButton.style.padding = '.1rem';
    xButton.innerHTML = 'X';
    let option1 = document.createElement('option');
    let option2 = document.createElement('option');
    option1.text = 'Yes';
    option2.text = 'No';
    readSelect.add(option1);
    readSelect.add(option2);
    
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
    buttonTd.appendChild(xButton)
    row.appendChild(buttonTd);
    table.appendChild(row);
}

function addRowToRows(){
    rows.push(row)
}

function addXButtonToXButtons(){
    xButtons.push(xButton);
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
    createTableElements()
    addRowToRows()
    addXButtonToXButtons()
    insertTableData()
    appendTableElements()
    console.log(xButtons)
    xButton.id = `${book.id}`
    
    xButtons.forEach(button => {button.addEventListener('click', function(){
        removeAllChildNodes(rows[xButton.id])
    
    
    })})
    
})




function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        
        parent.removeChild(parent.firstChild);

    }
}


addButton.click()

