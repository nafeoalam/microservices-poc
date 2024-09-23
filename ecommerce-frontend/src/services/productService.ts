import axios from "axios";

const productAxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_PRODUCTS_URL,
  headers: {
    "Content-Type": "application/json",
  },
//   withCredentials: true, // TODO: Need to Enable this
});

export default productAxiosInstance;
