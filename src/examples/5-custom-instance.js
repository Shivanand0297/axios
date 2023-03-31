import axios from "axios";
import { useEffect } from "react";
import { fetchAxios } from "../axiosDefaults/custom";

const randomUserUrl = "https://randomuser.me/api";

const CustomInstance = () => {
  const fetchData = async () => {
    const res1 = await fetchAxios.get("/react-store-products"); // this is different from other requests
    const res2 = await axios.get(randomUserUrl);
    console.log(res1, res2);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">custom instance</h2>;
};
export default CustomInstance;
