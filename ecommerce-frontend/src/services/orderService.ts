import axios from "axios";

const orderAxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_ORDER_URL,
  headers: {
    "Content-Type": "application/json",
  },
//   withCredentials: true, // TODO: Need to Enable this
});

export default orderAxiosInstance;
