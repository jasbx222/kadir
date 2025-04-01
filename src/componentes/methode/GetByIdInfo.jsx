import axios from "axios";
import { useEffect, useState } from "react";

const GetByIdInfo = (url,id) => {
    const [data, setData] = useState(null);

    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const  token=localStorage.getItem('token')
  
        if (!token) {
          console.log("no token !");
          return;
        }
  
        const res = await axios.get(
          `${url}/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
  
        setData(res.data);
      } catch (error) {
        console.error("Error fetching category:", error);
      }
    };
  return data
}

export default GetByIdInfo