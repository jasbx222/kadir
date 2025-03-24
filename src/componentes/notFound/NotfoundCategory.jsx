import React, { useEffect } from 'react'

const NotfoundCategory = () => {
  useEffect(()=>{
      swal({
        title: "لاتوجد اقسام حاليا",
        icon: "warning",
        dangerMode: true,
      })
  },[])
      return <>
    
      </>;
  
}

export default NotfoundCategory