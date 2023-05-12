// Book constructor function
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}
  
  // Author constructor function
  function Author(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.books = [];
  }
  
  // Add addBook method to the Author prototype
  Author.prototype.addBook = function(book) {
    this.books.push(book);
  };
  
  // Create authors and books
  const author1 = new Author("J.K.", "Rowling");
  const book1 = new Book("Harry Potter and the Philosopher's Stone", author1, 1997);
  author1.addBook(book1);
  
  const author2 = new Author("Harper", "Lee");
  const book2 = new Book("To Kill a Mockingbird", author2, 1960);
  author2.addBook(book2);
  
  const author3 = new Author("George", "Orwell");
  const book3 = new Book("1984", author3, 1949);
  author3.addBook(book3);

  
  // Display authors and their books in the HTML document
// Update the HTML with the book information
const author1BooksContainer = document.getElementById("author1-books");
const author2BooksContainer = document.getElementById("author2-books");
const author3BooksContainer = document.getElementById("author3-books");

function addBookToContainer(container, author, book) {
  const authorName = document.createElement("div");
  authorName.classList.add("author-name");
  authorName.textContent = author.firstName + " " + author.lastName + " books:";
  container.appendChild(authorName);

  const bookList = document.createElement("ul");
  bookList.classList.add("book-list");
  container.appendChild(bookList);

  const bookItem = document.createElement("li");
  bookItem.classList.add("book-item");
  bookItem.textContent = book.title + " (" + book.year + ")";
  bookList.appendChild(bookItem);
}

addBookToContainer(author1BooksContainer, author1, book1);
addBookToContainer(author2BooksContainer, author2, book2);
addBookToContainer(author3BooksContainer, author3, book3);