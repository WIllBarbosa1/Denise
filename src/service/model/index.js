import axios from "axios";

const baseURL = "https://denise-api.herokuapp.com/send-form";

const api = axios.create({ baseURL });

export async function fetchGetResult(data) {
  console.log("Data service: ", data);
  return api.post("/", { ...data });
}
