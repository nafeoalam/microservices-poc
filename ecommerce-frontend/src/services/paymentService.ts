import axios from "axios";

const paymentAxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_PAYMENT_URL,
  headers: {
    "Content-Type": "application/json",
  },
//   withCredentials: true, // TODO: Need to Enable this
});

export default paymentAxiosInstance;
