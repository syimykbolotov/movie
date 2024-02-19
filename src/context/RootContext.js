import React, { useState } from "react";
import { LanguageContext } from ".";

const RootContext = ({ children }) => {
  const [language, setLanguage] = useState("en-US");
  const [dark, setDark] = useState(false);
  const [favorite, setFavorite] = useState([]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        dark,
        setDark,
        favorite,
        setFavorite,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default RootContext;
