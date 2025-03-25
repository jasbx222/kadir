import {createContext} from 'react'
export const apiAuth=createContext(null)
const ContextApi = ({children}) => {
   const token = localStorage.getItem('token')
   
  return (
 <apiAuth.Provider  value={''}>
    {!token ?null:children}
 </apiAuth.Provider>
  )
}

export default ContextApi