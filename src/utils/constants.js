import axios from "axios";

const request = axios.create({
  baseURL: "https://f7c6ced59b8c.ngrok-free.app",
});

export default request;