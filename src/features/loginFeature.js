import axios from "axios";
const baseUrl = "http://localhost:3001";
export default async function handleLogin(username, password) {
  return axios
    .post(`${baseUrl}/api/login`, { username, password })
    .then((res) => res.data);
}
