import axios from "axios";

export const fetchAxios = axios.create({
  baseURL: "https://course-api.com",
  headers: {
    Accept: "application/json"
  }
})