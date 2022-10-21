let table = document.getElementById('library-table');
let titleInput = document.getElementById('title');
let authorInput = document.getElementById('author');
let pageInput = document.getElementById('pages');
let yesInput = document.getElementById('yes');
let noInput = document.getElementById('no');
let addButton = document.getElementById('addButton');
let read = ''


let myLibrary = [];


function Book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
}


let book1 = new Book('Cookbook', 'Some Person', '545', 'yes');
let book2 = new Book('Guide To Stuff', 'Some Guy', '243', 'no');
let book3 = new Book('How to Win Friends', 'Bobby Bob', '230', 'no');

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


function addBookToLibrary(newBook) {
    myLibrary.push(newBook)
    newBook.id = myLibrary.indexOf(newBook);
}








function displayLibrary() {
    
    for(let book of myLibrary) {
        book.id = myLibrary.indexOf(book);
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
}
    
    

addButton.addEventListener('click', function() {
    
    let book =  new Book(`${titleInput.value}`, `${authorInput.value}`, `${pageInput.value}`, `${read}`)
    addBookToLibrary(book)
    displayLibrary()

})




