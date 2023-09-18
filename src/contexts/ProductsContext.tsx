import React, { createContext, useContext, useState } from "react";
import { AppContextType } from "./AppContextTypes";

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [shoppingCartItems, setShoppingCartItems] = useState<
    { coffeeId: number; count: number }[]
  >([]);

  return (
    <AppContext.Provider value={{ shoppingCartItems, setShoppingCartItems }}>
      {children}
    </AppContext.Provider>
  );
};
