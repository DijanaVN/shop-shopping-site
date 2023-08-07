import axios from "axios";

const apiClientDetails = axios.create({
  baseURL: " https://api.escuelajs.co/api/v1/products",
});

export default apiClientDetails;
