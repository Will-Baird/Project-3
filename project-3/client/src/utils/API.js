import axios from "axios";

export default {
  getProducts: function() {
    return axios.get("/api/products");
  },
  getProduct: function(id) {
    return axios.get("/api/products/" + id);
  },
  deleteProduct: function(id) {
    return axios.delete("/api/products/" + id);
  },
  saveProduct: function(productData) {
    return axios.post("/api/products", productData);
  }
};
