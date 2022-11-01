const table = document.getElementById('library-table');
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
    title = document.createElement('td');
    author = document.createElement('td');
    pages = document.createElement('td');
    readSelect = document.createElement('SELECT');
    buttonTd = document.createElement('td')
    buttonTd.classList.add('buttonTd')
    xButton = document.createElement('button')
    xButton.style.padding = '.1rem';
    xButton.innerHTML = 'X';
    xButton.classList.add('xButton');
    xButton.id = book.id
    let option1 = document.createElement('option');
    let option2 = document.createElement('option');
    option1.text = 'Yes';
    option2.text = 'No';
    readSelect.add(option1);
    readSelect.add(option2);
}

function addXButtonToArray(){
    xButtons.push(xButton)
}

function insertTableData(){
    title.innerHTML = `${book.title}`;
    author.innerHTML = `${book.author}`;
    pages.innerHTML = `${book.pages}`;
    readSelect.value = read    
}

function appendTableElements(){ 
    row.appendChild(title);
    row.appendChild(author);
    row.appendChild(pages);
    row.appendChild(readSelect);
    buttonTd.appendChild(xButton)
    row.appendChild(buttonTd);
    table.appendChild(row);
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
    if((titleInput.value === '') || 
        (authorInput.value === '') ||
        (pageInput.value === '') ||
        (read === '')) {
            return
        }    
    table.hidden = false
    book =  new Book(`${titleInput.value}`, `${authorInput.value}`, `${pageInput.value}`, `${read}`)
    addBookToLibrary(book)
    createTableElements()
    addXButtonToArray()
    insertTableData()
    appendTableElements()
    titleInput.value = ''
    authorInput.value = ''
    pageInput.value = ''
    yesInput.checked = false
    noInput.checked = false
    

    

})


function onDeleteRow(e){
    if(!e.target.classList.contains('xButton')) {
        return;
    }
        const btn = e.target;
        btn.closest('tr').remove();
        myLibrary.splice(btn.id)
    }
    
table.addEventListener('click', onDeleteRow);
    
const form = document.getElementById('whole-form');
const newBtn = document.getElementById('newBook');
const closeBtn = document.getElementById('close');

newBtn.addEventListener('click', function(){
        form.hidden = false
})
    
newBtn.click()
yesInput.click()
addButton.click()

closeBtn.addEventListener('click', function(){
    form.hidden = true
})
