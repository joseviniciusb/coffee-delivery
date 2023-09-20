import React, { createContext, useContext, useState } from "react";
import { AppContextType } from "./AppContextTypes";

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => useContext(AppContext) as AppContextType;

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [shoppingCartItems, setShoppingCartItems] = useState<
    { coffeeId: number; count: number }[]
  >([]);

  function removeProduct(index: number){
      const newShoppingCartItems = [...shoppingCartItems];
      newShoppingCartItems.splice(index, 1);
      setShoppingCartItems(newShoppingCartItems);
 }

  const handleProduct = (id: number, increment: number) => {
    const updatedCartItems = [...shoppingCartItems];

    const itemIndex = updatedCartItems.findIndex(
      (item) => item.coffeeId === id
    );

    if (itemIndex < 0 && increment === -1) return;

    if (
      increment === -1 &&
      itemIndex >= 0 &&
      updatedCartItems[itemIndex].count === 1
    ) {
      removeProduct(itemIndex);
      return;
    }

    if (itemIndex >= 0)
      updatedCartItems[itemIndex].count =
        updatedCartItems[itemIndex].count + increment;
    else updatedCartItems.push({ coffeeId: id, count: 1 });

    setShoppingCartItems(updatedCartItems);
  };

  return (
    <AppContext.Provider value={{ shoppingCartItems, setShoppingCartItems, handleProduct, removeProduct }}>
      {children}
    </AppContext.Provider>
  );
};
