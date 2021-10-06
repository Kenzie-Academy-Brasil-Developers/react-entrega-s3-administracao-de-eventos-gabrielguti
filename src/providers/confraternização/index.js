import { createContext, useState } from "react";

export const PartyContext = createContext();

export const PartyProvider = ({ children }) => {
  const [partyList, setPartyList] = useState([]);

  const addToList = (item) => {
    setPartyList([...partyList, item]);
  };

  const removeFromList = (item) => {
    const newList = partyList.filter((elem) => {
      return elem.id !== item.id;
    });

    setPartyList(newList);
  };

  return (
    <PartyContext.Provider value={{ partyList, addToList, removeFromList }}>
      {children}
    </PartyContext.Provider>
  );
};
