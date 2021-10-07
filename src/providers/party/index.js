import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const PartyContext = createContext();

export const PartyProvider = ({ children }) => {
  const [partyList, setPartyList] = useState([]);

  const addToParty = (item) => {
    setPartyList([...partyList, item]);
    toast.success("Item adicionado com sucesso");
  };

  const removeFromParty = (index) => {
    const newList = partyList.filter((_, index2) => {
      return index !== index2;
    });

    setPartyList(newList);
    toast.success("Item removido com sucesso");
  };

  return (
    <PartyContext.Provider value={{ partyList, addToParty, removeFromParty }}>
      {children}
    </PartyContext.Provider>
  );
};
