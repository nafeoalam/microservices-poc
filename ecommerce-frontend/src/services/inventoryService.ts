import axios from "axios";

const inventoryAxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_INVENTORY_URL,
  headers: {
    "Content-Type": "application/json",
  },
//   withCredentials: true, // TODO: Need to Enable this
});

export default inventoryAxiosInstance;
