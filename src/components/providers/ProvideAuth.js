import React, {createContext, useContext} from 'react';
import useToken from "../../services/useToken";

const authContext = createContext();

const ProvideAuth = ({ children }) => {
  const { token } = useToken();
  return (
      <authContext.Provider value={token}>
        {children}
      </authContext.Provider>
  );
}

export default ProvideAuth;
