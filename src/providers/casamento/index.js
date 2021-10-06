import { createContext, useState } from "react";

export const WeddingContext = createContext();

export const WeddingProvider = ({ children }) => {
  const [weddingList, setWeddingList] = useState([]);

  const addToWedding = (item) => {
    setWeddingList([...weddingList, item]);
  };

  const removeFromWedding = (item) => {
    const newList = weddingList.filter((elem) => {
      return elem.id !== item.id;
    });

    setWeddingList(newList);
  };

  return (
    <WeddingContext.Provider
      value={{ weddingList, addToWedding, removeFromWedding }}
    >
      {children}
    </WeddingContext.Provider>
  );
};
