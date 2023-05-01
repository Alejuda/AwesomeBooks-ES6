const booksContainer = document.getElementById('books-container');
const renderBooks = (books) => {
  let innerBooks = "";
  if (books.length === 0) {
    innerBooks =
      '<h3 class="books-placeholder">You do not have any books yet. Add one below!</h3>';
  } else {
    books.forEach((book, idx) => {
      let odd = "row-odd";
      if (idx % 2 !== 0) {
        odd = "row-even";
      }
      innerBooks += `
        <div class="book-card ${odd}">
          <h2 class="book-title">"${book.title}"</h2>
          <p class="book-author">By ${book.author}</p>
          <button class="remove-btn" id="remove-btn" onclick="removeBook(${book.id})">Remove</button>
        </div>
        `;
    });
  }
  booksContainer.innerHTML = innerBooks;
};

export default renderBooks;
