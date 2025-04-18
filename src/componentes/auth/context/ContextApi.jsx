import {createContext} from 'react';
import Login from '../../../pages/login/Login';
export const apiAuth=createContext(null)
const ContextApi = ({children}) => {
  const  token=localStorage.getItem('token')
  return (
 <apiAuth.Provider  value={token}>
    {!token ?<Login/>:children}
 </apiAuth.Provider>
  )
}

export default ContextApi