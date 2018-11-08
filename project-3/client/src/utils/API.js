import axios from "axios";

export default {
  // Gets all books
  getServices: function() {
    return axios.get("/api/services");
  },
  // Gets the book with the given id
  getServices: function(id) {
    return axios.get("/api/services/" + id);
  },
  // Deletes the book with the given id
  deleteService: function(id) {
    return axios.delete("/api/services/" + id);
  },
  // Saves a book to the database
  saveService: function(bookData) {
    return axios.post("/api/services", bookData);
  }
};
