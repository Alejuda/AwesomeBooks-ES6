const form = document.getElementById('form');
const booksContainer = document.getElementById('books-container');
const contactContainer = document.getElementById('contact-container');
const sectionTitle = document.getElementById('section-title');
const listLink = document.getElementById('list-link');
const addLink = document.getElementById('add-link');
const contactLink = document.getElementById('contact-link');

const listLinkClick = () => {
  if (!booksContainer.classList.contains('show')) {
    booksContainer.classList.add('show');
    form.classList.remove('show');
    contactContainer.classList.remove('show');
    sectionTitle.innerText = 'All Awesome Books';
    listLink.classList.add('active');
    addLink.classList.remove('active');
    contactLink.classList.remove('active');
  }
};

const addLinkClick = () => {
  if (!form.classList.contains('show')) {
    booksContainer.classList.remove('show');
    form.classList.add('show');
    contactContainer.classList.remove('show');
    sectionTitle.innerText = 'Add a new book';
    listLink.classList.remove('active');
    addLink.classList.add('active');
    contactLink.classList.remove('active');
  }
};

const contactLinkClick = () => {
  if (!contactContainer.classList.contains('show')) {
    booksContainer.classList.remove('show');
    form.classList.remove('show');
    contactContainer.classList.add('show');
    sectionTitle.innerText = 'Contact Information';
    listLink.classList.remove('active');
    addLink.classList.remove('active');
    contactLink.classList.add('active');
  }
};

export { listLinkClick, addLinkClick, contactLinkClick };