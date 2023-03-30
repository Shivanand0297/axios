import axios from 'axios';
import { useEffect } from 'react';

const productsUrl = 'https://course-api.com/react-store-products';
const randomUserUrl = 'https://randomuser.me/api';

const GlobalInstance = () => {
  const fetchData = async () => {
    try {
      const res = await axios.get(productsUrl)
      console.log(res.data)
    } catch (error) {
      console.log(error)
    } 
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>global instance</h2>;
};
export default GlobalInstance;
