import axios from 'axios';
import React, { useState } from 'react'
import FormPolicy from './FormPolicy';
import FormMedai from './FormMedai';

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
  
<div className='md:relative md:left-32'>
    <FormPolicy
    title={title}
    title2={title2}
    setTitle={setTitle}
    setTitle2={setTitle2}
    HandleSubmit={HandleSubmit}
    
    />
    <FormMedai/>
</div>
  )
}

export default Policy