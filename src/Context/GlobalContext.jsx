import { createContext, useContext } from "react";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const initialState = {
    number: 0,
  };

  return (
    <GlobalContext.Provider value={initialState}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
export default GlobalProvider