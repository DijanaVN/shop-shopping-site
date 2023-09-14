import axios from "axios";

const apiClientCarts = axios.create({
  baseURL: "https://fakestoreapi.com/carts",
});

export default apiClientCarts;
