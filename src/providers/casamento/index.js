import { createContext, useState } from "react";

export const WeddingContext = createContext();

export const WeddingProvider = ({ children }) => {
  const [weddingList, setWeddingList] = useState([]);

  const addToList = (item) => {
    setWeddingList([...weddingList, item]);
  };

  const removeFromList = (item) => {
    const newList = weddingList.filter((elem) => {
      return elem.id !== item.id;
    });

    setWeddingList(newList);
  };

  return (
    <WeddingContext.Provider value={{ weddingList, addToList, removeFromList }}>
      {children}
    </WeddingContext.Provider>
  );
};
