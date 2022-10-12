import axios from "axios";

const baseURL = "https://api.github.com/users/";

const api = axios.create({ baseURL });

export function getGitUserInfos(user) {
  return api.get(user);
}
