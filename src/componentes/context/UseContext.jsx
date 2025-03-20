import { createContext, useContext } from "react";
import useGet from "./useget/useGet";
export const UserContextInfo = createContext();
const UseContext = ({ children }) => {
    const api = "jsonplaceholder.typicode.com/users";
    const user = useGet(`https://${api}`);
  return (
    <UserContextInfo.Provider
    
      value={{user}}>
      {children}
    </UserContextInfo.Provider>
  );
};

export default UseContext;


export const useAuth =()=>{
    return useContext(UserContextInfo);
}
