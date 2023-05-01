export default class Book {
    constructor(title, author, books) {
      if (author === '') {
        author = 'Unknown Author';
      }
      let newId = 0;
      let maxId = -1;
      if (books.length > 0) {
        maxId = books[books.length - 1].id;
      }
      newId = maxId + 1;

      this.id = newId;
      this.title = title;
      this.author = author;
    }
}