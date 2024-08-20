import React, { createContext, useContext, useState } from "react";

const SellContext = createContext();

export default function SellProvider({ children }) {
  const [isSellButtonClicked, setIsSellButtonIsClicked] = useState(false);

  const handleSellButtonClick = () => {
    setIsSellButtonIsClicked(!isSellButtonClicked);
  };

  const contextValue = {
    isSellButtonClicked,
    handleSellButtonClick,
  };
  
  return (
    <SellContext.Provider
      value={{ isSellButtonClicked, handleSellButtonClick }}
    >
      {children}
    </SellContext.Provider>
  );
}

export const useSellContext = () => useContext(SellContext);
