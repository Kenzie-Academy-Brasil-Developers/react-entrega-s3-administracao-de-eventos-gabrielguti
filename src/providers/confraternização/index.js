import { createContext, useState } from "react";

export const PartyContext = createContext();

export const PartyProvider = ({ children }) => {
  const [partyList, setPartyList] = useState([]);

  const addToParty = (item) => {
    setPartyList([...partyList, item]);
  };

  const removeFromParty = (item) => {
    const newList = partyList.filter((elem) => {
      return elem.id !== item.id;
    });

    setPartyList(newList);
  };

  return (
    <PartyContext.Provider value={{ partyList, addToParty, removeFromParty }}>
      {children}
    </PartyContext.Provider>
  );
};
