import React, { useContext, useState, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const initialState = "#e2dff0";
  const [colorStyle, setColorStyle] = useState(
    localStorage.getItem("page") ? localStorage.getItem("page") : initialState
  );
  const checkColor = (colorType) => {
    setColorStyle(colorType);
  };

  useEffect(() => {
    localStorage.setItem("page", colorStyle);
  }, [colorStyle]);

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
