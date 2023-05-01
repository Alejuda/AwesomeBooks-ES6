import BookList from './BookList.js'
const setBooks = (books) => {
  if (localStorage.getItem("books-colection") !== null) {
    const localStorageContent = localStorage.getItem("books-colection");
    books = new BookList(...JSON.parse(localStorageContent));
  }
};

export default setBooks;