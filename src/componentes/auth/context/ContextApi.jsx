import {createContext, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import Login from '../../../pages/login/Login';
export const apiAuth=createContext(null)
const ContextApi = ({children}) => {

   const navigate =useNavigate()
   const token =localStorage.getItem('token')
    
  return (
 <apiAuth.Provider  value={''}>
    {!token ?<Login/>:children}
 </apiAuth.Provider>
  )
}

export default ContextApi