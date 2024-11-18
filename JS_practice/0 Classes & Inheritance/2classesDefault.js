class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(title, author, year) {
      const newBook = { title, author, year };
      this.books.push(newBook);
    }
  
    getBooks() {
      return this.books;
    }
  }
  
  // Usage
  const myLibrary = new Library();
  myLibrary.addBook("The Great Gatsby", "F. Scott Fitzgerald", 1925);
  myLibrary.addBook("1984", "George Orwell", 1949);
  
  console.log(myLibrary.getBooks());