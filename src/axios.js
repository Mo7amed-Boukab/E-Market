import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/api/v2/",
  withCredentials: true,
  headers: {
    Accept: "application/json",
  },
});

export default instance;