import { createContext, useState } from "react";
import { toast } from "react-toastify";
export const WeddingContext = createContext();

export const WeddingProvider = ({ children }) => {
  const [weddingList, setWeddingList] = useState([]);

  const addToWedding = (item) => {
    setWeddingList([...weddingList, item]);
    toast.success("Item adicionado com sucesso");
  };

  const removeFromWedding = (index) => {
    const newList = weddingList.filter((_, index2) => {
      return index2 !== index
    });

    setWeddingList(newList);
    toast.success("Item removido com sucesso");
  };

  return (
    <WeddingContext.Provider
      value={{ weddingList, addToWedding, removeFromWedding }}
    >
      {children}
    </WeddingContext.Provider>
  );
};
