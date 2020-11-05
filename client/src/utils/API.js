import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },

  userTest: function() {
    return axios.get("/api/user/test");
  },
  // Saves a user to the database
  userLogin: function(userData) {
    return axios.post("/api/user/login", userData);
  },

  userSignUp: function(userData) {
    return axios.post("/api/user/signup", userData);
  },

  userLogout: function() {
    return axios.get("/api/user/logout");
  },

  getUser: function(userData) {
    return axios.get("/api/user/data", userData);
  },

  getOutfits: function() {
    return axios.get("/api/outfits");
  },

  getOutfit: function(id) {
    return axios.get("/api/outfits/" + id);
  }
};
