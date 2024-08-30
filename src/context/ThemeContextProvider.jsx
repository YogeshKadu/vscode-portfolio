import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);
const availableThemes = [
  {
    id: "01",
    name: "neutral",
    value: "neutral",
    backgroundColor:"bg-neutral-700"
  },
  {
    id: "03",
    name: "gray",
    value: "gray",
    backgroundColor:"bg-gray-700"
  },
  {
    id: "02",
    name: "slate",
    value: "slate",
    backgroundColor:"bg-slate-700"
  },
  {
    id: "04",
    name: "sky",
    value: "sky",
    backgroundColor:"bg-sky-700"
  },
];
function ThemeContextProvider({ children }) {
  const [theme, SetTheme] = useState(availableThemes[0]);
  const setTheme = (theme) => {
    localStorage.setItem("theme",theme.id.toString());
    SetTheme(theme);
  }
  useEffect(() => {
    const locaThemeId = localStorage.getItem("theme") || "01"
    // console.log(locaThemeId);
    
    SetTheme(availableThemes.find(item => item.id ==locaThemeId));
  },[])

  return (
    <ThemeContext.Provider value={{ availableThemes, theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;

export const useThemeProvider = ()=>{
    const context = useContext(ThemeContext);
    if(!context)
        throw Error("Theme context must be used within provider");
    return context;
}