import { createContext, useContext } from "react";

const ServerContext = createContext();

// eslint-disable-next-line react/prop-types
export const ServerProvider = ({ children }) => {
  // const serverLink = "/beyondrenewables";

  // production only
  const serverLink = "";

  return (
    <ServerContext.Provider value={{ serverLink }}>
      {children}
    </ServerContext.Provider>
  );
};

export const useServerLink = () => useContext(ServerContext);
