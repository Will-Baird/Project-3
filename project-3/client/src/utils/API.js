import axios from "axios";

export default {
  // Gets all books
  getProducts: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getProduct: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteProduct: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveProduct: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
