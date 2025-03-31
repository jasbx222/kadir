import {createContext, useEffect} from 'react';
import Login from '../../../pages/login/Login';
export const apiAuth=createContext(null)
const ContextApi = ({children}) => {
   const token =window.sessionStorage.getItem('token')
    
  return (
 <apiAuth.Provider  value={''}>
    {!token ?<Login/>:children}
 </apiAuth.Provider>
  )
}

export default ContextApi