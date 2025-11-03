import axios from "axios";

const request = axios.create({
  baseURL: "https://9039ad245429.ngrok-free.app",
});

export default request;