import axios from "axios";
const REGISTER_URI = "http://localhost:3000/users/register";

export const registerCallApi = (data) => {
  console.log("212121212121212121", data);
  axios({
    method: "post",
    url: REGISTER_URI,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: data,
  })
    .then((res) => console.log("---------", res))
    .catch((err) => console.log("212112", err));
};
