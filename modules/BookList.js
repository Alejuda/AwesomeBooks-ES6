import renderBooks from "./renderBooks.js";
export default class BookList extends Array {
  addBook(newBook) {
    this.push(newBook);
    localStorage.setItem("books-colection", JSON.stringify(this));
    renderBooks(this);
  }

  removeBook(id) {
    const remove = this.findIndex((book) => book.id === id);
    this.splice(remove, 1);
    localStorage.setItem("books-colection", JSON.stringify(books));
    renderBooks(this)
  }
}