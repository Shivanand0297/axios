import { useEffect } from "react";
import { authFetch } from "../axiosDefaults/intersepter";

// const url = 'https://course-api.com/react-store-products';

const Interceptors = () => {
  const fetchData = async () => {
    console.log("axios interceptors");

    try {
      const res = await authFetch("/react-store-productss");
      console.log(res.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">interceptors</h2>;
};
export default Interceptors;
