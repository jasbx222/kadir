import axios from 'axios';
import React, { useState } from 'react'

const Policy = () => {
    const [title,setTitle]=useState('')
    const [title2,setTitle2]=useState('')
    const HandleSubmit=async(e)=>{
        const token=localStorage.getItem('token')
        if(!token){
           swal({
            title:'you have no token',
            icon:'warning'
           })
        }
e.preventDefault();
const formData={title:title,title2:title2}
try {
    console.log(formData)
    await axios.post('url',formData,{
        headers:{
            Authorization:`Bearer ${token}`,
            "Content-Type": "multipart/form-data",
        }
    }).then(()=>{
        swal({
            title:'done',
            icon:'success'
        })
    })
    
} catch (error) {
    console.log(error)
}
    }
  return (
  
<div className='text-center relative md:right-10 top-32'>
<form onSubmit={HandleSubmit}>
   <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
       <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
           <label  className=" text-black">الشروط للاعلانات</label>
           <textarea value={title} onChange={(e)=>setTitle(e.target.value)} style={{border:'2px solid gray'}}  rows="5" cols={100} className="w-full rounded-xl text-center  px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"  required ></textarea>
       </div>
       <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
           <label  className=" text-black">طريقة استخدام التطبيق</label>
           <textarea value={title2} onChange={(e)=>setTitle2(e.target.value)} style={{border:'2px solid gray'}}  rows="5" cols={100} className="w-full rounded-xl text-center  px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"  required ></textarea>
       </div>
       <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600 border-gray-200">
           <button type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
            ارسال
           </button>
     
           
         
       </div>
   </div>
</form>
</div>
  )
}

export default Policy