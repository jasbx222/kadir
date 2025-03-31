import axios from "axios";
import { useEffect, useState } from "react";

const GetInfo = (url) => {
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        setData(res.data.data);
      } catch (error) { 
        console.error("Error fetching profile info:", error);
      }
    };

    fetchData();
 
  }, [url]);

  return data;
};

export default GetInfo;
