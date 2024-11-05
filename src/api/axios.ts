import axios from "axios";

export const instance = axios.create({
  baseURL: "https://api.themobiedb.org/3",
  params: {
    api_key: "36d18aea8eaded6ca7c3df173d432",
    language: "ko-KR",
  },
});
