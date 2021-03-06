import axios from "axios";

export default {
  // Gets all products
  getProducts: function() {
    return axios.get("/api/users/products");
  },
  getShoes: function() {
    return axios.get("/api/users/products/shoes");
  },
  getAccessories: function() {
    return axios.get("/api/users/products/accessories");
  },
  getClothing: function() {
    return axios.get("/api/users/products/clothing");
  },
  // Gets the product with the given id
  getProduct: function(id) {
    return axios.get("/api/users/products/" + id);
  },
  // Deletes the product with the given id
  deleteProduct: function(id) {
    return axios.delete("/api/users/products/" + id);
  },
  updateProduct: function(id, prodData){
    return axios.put("/api/users/products/" + id, prodData)
  },
  // Save a product to the database
  saveProduct: function(prodData) {
    return axios.post("/api/users/products/create", prodData);
  },
  saveProductFans: function(id, itemData) {
    return axios.post("/api/users/products/" + id + "/fans", itemData);
  },
  saveProductComment: function(id, commentData) {
    return axios.post("/api/users/products/" + id + "/comments", commentData);
  }
};