import axios from "axios";

const baseURL = "http://denise-api.herokuapp.com";

const api = axios.create({ baseURL });

export async function fetchGetResult(data) {
  console.log("Data service: ", data);
  return api.post("/send-form", {
    headers: {
      "Content-Type": "application/json",
    },
    ...data,
  });
}
