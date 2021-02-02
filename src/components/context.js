import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [colorStyle, setColorStyle] = useState({ color: "#e2dff0" });
  const checkColor = (colorType) => {
    setColorStyle({ color: colorType });
  };
  return (
    <AppContext.Provider value={{ colorStyle, checkColor }}>
      {children}
    </AppContext.Provider>
  );
};
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
