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
    select = document.createElement('td');
    select.classList.add('read-select')
    readSelect = document.createElement('SELECT');
    selectContainer = document.createElement('div');
    selectContainer.classList.add('selectDiv')
    buttonTd = document.createElement('td')
    buttonTd.classList.add('buttonTd')
    xButton = document.createElement('button')
    xButton.style.padding = '.1rem';
    xButton.innerHTML = 'X';
    xButton.style.fontSize = '1rem'
    xButton.classList.add('xButton');
    xButton.id = book.id
    let option1 = document.createElement('option');
    let option2 = document.createElement('option');
    option1.text = 'Yes';
    option2.text = 'No';
    readSelect.add(option1);
    readSelect.add(option2);
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
    row.appendChild(select);
    select.appendChild(readSelect);
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
    

const book1 = new Book('Dune', 'Frank Herbert', '412', 'Yes')
const book2 = new Book('Dune', 'Frank Herbert', '412', 'Yes')
const book3 = new Book('Dune', 'Frank Herbert', '412', 'Yes')
const book4 = new Book('Dune', 'Frank Herbert', '412', 'Yes')
const book5 = new Book('Dune', 'Frank Herbert', '412', 'Yes')
const book6 = new Book('Dune', 'Frank Herbert', '412', 'Yes')
const book7 = new Book('Dune', 'Frank Herbert', '412', 'Yes')
const book8 = new Book('Dune', 'Frank Herbert', '412', 'Yes')
const book9 = new Book('Dune', 'Frank Herbert', '412', 'Yes')
const book10 = new Book('Dune', 'Frank Herbert', '412', 'Yes')
const book11 = new Book('Dune', 'Frank Herbert', '412', 'Yes')
const book12 = new Book('Dune', 'Frank Herbert', '412', 'Yes')

addBookToLibrary(book1)
addBookToLibrary(book2)
addBookToLibrary(book3)
addBookToLibrary(book4)
addBookToLibrary(book5)
addBookToLibrary(book6)
addBookToLibrary(book7)
addBookToLibrary(book8)
addBookToLibrary(book9)
addBookToLibrary(book10)
addBookToLibrary(book11)
addBookToLibrary(book12)
console.log(myLibrary);

for(item of myLibrary) {
    createTableElements()
    title.innerHTML = `${item.title}`;
    author.innerHTML = `${item.author}`;
    pages.innerHTML = `${item.pages}`;
    readSelect.value = `${item.status}`;
    appendTableElements()
}
console.log(myLibrary)