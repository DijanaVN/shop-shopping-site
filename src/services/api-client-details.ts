import axios from "axios";

const apiClientDetails = axios.create({
  baseURL: "https://fakestoreapi.com/products",
});

export default apiClientDetails;
