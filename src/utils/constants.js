import axios from "axios";

const request = axios.create({
  baseURL: "https://9039ad245429.ngrok-free.app/api/auth/register",
});

export default request;