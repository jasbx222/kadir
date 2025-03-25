import {createContext, useEffect} from 'react'
export const apiAuth=createContext(null)
const ContextApi = ({children}) => {
   const token = localStorage.getItem('token')
  return (
 <apiAuth.Provider  value={''}>
    {!token ?'':children}
 </apiAuth.Provider>
  )
}

export default ContextApi