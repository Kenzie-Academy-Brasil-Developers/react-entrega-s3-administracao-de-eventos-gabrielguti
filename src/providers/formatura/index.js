import { createContext, useState } from "react";

export const GraduationContext = createContext();

export const GraduationProvider = ({ children }) => {
  const [graduationList, setGraduationList] = useState([]);

  const addToList = (item) => {
    setGraduationList([...graduationList, item]);
  };

  const removeFromList = (item) => {
    const newList = graduationList.filter((elem) => {
      return elem.id !== item.id;
    });
    setGraduationList(newList);
  };

  return (
    <GraduationContext.Provider
      value={{ graduationList, addToList, removeFromList }}
    >
      {children}
    </GraduationContext.Provider>
  );
};
