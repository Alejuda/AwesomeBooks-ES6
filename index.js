import BookList from "./modules/BookList.js";
import renderBooks from "./modules/renderBooks.js";
import addForm from "./modules/addForm.js";
import {
  addLinkClick,
  contactLinkClick,
  listLinkClick,
} from "./modules/navLinks.js";
import setBooks from "./modules/setBooks.js";

const form = document.getElementById("form");
const listLink = document.getElementById("list-link");
const addLink = document.getElementById("add-link");
const contactLink = document.getElementById("contact-link");

let books = new BookList();
setBooks();

renderBooks(books);

window.removeBook = (id) => {
  books.removeBook(id);
};

form.addEventListener("submit", addForm);

listLink.addEventListener("click", listLinkClick);
addLink.addEventListener("click", addLinkClick);
contactLink.addEventListener("click", contactLinkClick);

export default books;