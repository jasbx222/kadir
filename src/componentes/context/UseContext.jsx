import { createContext, useContext, useState } from "react";
import useGet from "./useget/useGet";
export const UserContextInfo = createContext();
const UseContext = ({ children }) => {
  const api = "https://back.kadrapp.com";
  const user = useGet(`${api}/`);
  const [token, setToken] = useState(false);
  return (
    <UserContextInfo.Provider value={{ user }}>
      {children}
    </UserContextInfo.Provider>
  );
};

export default UseContext;
