import axios from "axios";
const baseUrl = "http://localhost:3001";
export default async function handleRegister(name, username, email, password) {
  return axios
    .post(`${baseUrl}/api/users/create`, { name, username, email, password })
    .then((res) => res.data);
}
