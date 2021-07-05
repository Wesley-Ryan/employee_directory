import axios from "axios";

const token = localStorage.getItem("MNTN_Corp");
const axiosAuth = axios.create({
  baseURL: "https://nexient-side.herokuapp.com",
  headers: { authorization: token },
});

export default axiosAuth;
