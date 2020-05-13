import axios from "axios";
const REGISTER_URI = "http://localhost:3000/users/register";

export const registerCallApi = (data) => {
  return axios({
    method: "post",
    url: REGISTER_URI,
    data: data,
  })
    .then((res) => console.log("---------", res))
    .catch((err) => console.log("212112", err));
};
