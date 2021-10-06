import { createContext, useState } from "react";
import { toast } from "react-toastify";
export const WeddingContext = createContext();

export const WeddingProvider = ({ children }) => {
  const [weddingList, setWeddingList] = useState([]);

  const addToWedding = (item) => {
    setWeddingList([...weddingList, item]);
    toast.success("Item adicionado com sucesso");
  };

  const removeFromWedding = (item) => {
    const newList = weddingList.filter((elem) => {
      return elem.id !== item.id;
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
