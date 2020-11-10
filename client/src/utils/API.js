import axios from "axios";

export default {
  userTest: function () {
    return axios.get("/api/user/test");
  },

  userLogin: function (userData) {
    return axios.post("/api/user/login", userData);
  },

  userSignUp: function (userData) {
    return axios.post("/api/user/signup", userData);
  },

  userLogout: function () {
    return axios.get("/api/user/logout");
  },

  getUser: function (userData) {
    return axios.get("/api/user/data", userData);
  },

  getOutfits: function () {
    return axios.get("/api/outfits");
  },

  getOutfit: function (id) {
    return axios.get("/api/outfits/" + id);
  },

  updateUserOutfits: function (outfitid) {
    return axios.put("/api/user/closet/" + outfitid);
  }
};
// axios get call and then post instead of put (updating and we are not updating).