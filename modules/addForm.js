import Book from './book.js';
import books from '../index.js';

const nameInput = document.getElementById('name');
const descriptionInput = document.getElementById('description');

const add = (e) => {
  e.preventDefault();
  const newBook = new Book(nameInput.value, descriptionInput.value, books);
  books.addBook(newBook);
  nameInput.value = '';
  descriptionInput.value = '';
};

export default add;