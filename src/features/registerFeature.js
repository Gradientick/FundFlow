import axios from "axios";
const baseUrl = "http://localhost:3001";
export default async function handleRegister(username, name, password) {
  return axios
    .post(`${baseUrl}/api/users/create`, { username, name, password })
    .then((res) => res.data);
}
