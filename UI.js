//It can not be a instance
//storedBooks is array which books come from the localStorage
class UI {
  static displayBooks() {
    const StoredBooks = [
      { title: "Bright Day", author: "John", isbn: "3434434" },
    ];
    const books = StoredBook;
    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector("#book-list");
    const row = document.createElement("tr");

    row.innerHTML = `
        <td> ${book.title}</td>
        <td> ${book.athor}</td>
        <td> ${book.isbn}</td>
        <td> <a href="#" class='btn btn-danger' btn-sm delete>X</a></td>
    `;
    list.appendChild(row);
  }
}

// Event: Display Books
document.addEventListener("DOMContentLoaded", UI.displayBooks());

//Event: Add a Book

document.querySelector("#book-form").addEventListener("submit", (e) => {
  //prevent actual submit
  e.preventDefault();
  //Get form values
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;

  // Instatiate Book
  const book = new Book(title, author, isbn);
  UI.addBookToList(book);
});
