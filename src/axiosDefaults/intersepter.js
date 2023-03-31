import axios from "axios";

export const authFetch = axios.create({
  baseURL: "https://course-api.com",
});

authFetch.interceptors.request.use(
  (req) => {
    req.headers.Accept = "application/json";
    console.log("request sent");

    return req;
  },
  (err) => {
    return Promise().reject(err);
  }
);

authFetch.interceptors.response.use(
  (res) => {
    console.log("got response");
    return res;
  },
  (err) => {
    console.log(err);
    if (err.response.status === 404) {
      // do something
      console.log("Not found");
    }
    return Promise().reject(err);
  }
);
