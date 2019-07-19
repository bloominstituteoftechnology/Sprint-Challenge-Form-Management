import axios from "axios";

 const AxiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`
    },
    baseURL: "http://localhost:4000/api"
  });
};
export default AxiosWithAuth