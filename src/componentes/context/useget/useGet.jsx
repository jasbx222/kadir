import { useEffect, useState } from 'react'

const useGet = (url) => {
    const [data, setData] = useState([])
    useEffect(()=>{
      async function fetchData() {
       
        const response = await fetch(url)
        const data = await response.json()
        setData(data[0])
      }
      fetchData()
    },[])
  return data;
}

export default useGet;

