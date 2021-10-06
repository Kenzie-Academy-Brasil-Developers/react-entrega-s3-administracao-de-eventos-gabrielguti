import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const GraduationContext = createContext();

export const GraduationProvider = ({ children }) => {
  const [graduationList, setGraduationList] = useState([]);

  const addToGraduation = (item) => {
    setGraduationList([...graduationList, item]);
    toast.success("Item adicionado com sucesso");
  };

  const removeFromGraduation = (item) => {
    const newList = graduationList.filter((elem) => {
      return elem.id !== item.id;
    });
    setGraduationList(newList);
    toast.success("Item removido com sucesso");
  };

  return (
    <GraduationContext.Provider
      value={{ graduationList, addToGraduation, removeFromGraduation }}
    >
      {children}
    </GraduationContext.Provider>
  );
};
