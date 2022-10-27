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
let deleteArray = [];
let readSelect = '';
let checkMark = '';
let checkMarks = [];


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
    row.id =  `${book.id}`
    id.id =  `${book.id}`
    title.id =  `${book.id}`
    pages.id =  `${book.id}`
    select.id =  `${book.id}`
    checkMark = document.createElement('input');
    checkMark.type = 'checkbox';
    checkMark.id = `${book.id}`
    readSelect = document.createElement('SELECT');
    let option1 = document.createElement('option');
    let option2 = document.createElement('option');
    option1.text = 'Yes';
    option2.text = 'No';
    readSelect.add(option1);
    readSelect.add(option2);
    console.log(table.rows)
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
    insertTableData()
    appendTableElements()
    console.log(myLibrary);
    
})

addButton.addEventListener('click', function() {
    
    
    checkMarks = [];
    checkMarks = document.querySelectorAll('input[type="checkbox"]');
    console.log(checkMarks);

})


addButton.click()
checkMarks.forEach(input => {input.addEventListener('change', function(){
    
    
    if(input.checked === true) {
        
        deleteArray.push(checkMark.id);
        console.log(deleteArray);
    }
    
    else {}
    
})})

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        
        parent.removeChild(parent.firstChild);

    }
}
deleteButton.addEventListener('click', function() {
    console.log(myLibrary)
    for(book in myLibrary) {
 
        removeAllChildNodes(row);
        
    }
    
    //I want to delete the book object from the library array
    myLibrary.splice(`${checkMark.id}`)
    
    
    //Then append the library elements

    // for(entry in myLibrary){
    //     book =  new Book(`${book.title}`, `${book.author}`, `${book.page}`, `${read}`)
    // addBookToLibrary(book)
    // createTableElements()
    // insertTableData()
    // appendTableElements()
        
    // }
    
})

console.log(table);