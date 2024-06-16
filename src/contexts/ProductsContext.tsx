import React, { createContext, useContext, useState } from "react";
import { AppContextType, CartItem } from "./AppContextTypes";
import { Coffee } from "../domain/entities/Coffee";

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => useContext(AppContext) as AppContextType;

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [shoppingCartItems, setShoppingCartItems] = useState<
    { coffeeId: number; count: number }[]
  >([]);

  function removeProduct(index: number) {
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

  function filterCoffeesById(coffees: Coffee[], shoppingCartItems: CartItem[]) {
    return shoppingCartItems.map(({ coffeeId, count }) => {
      const coffee = coffees.find(
        (c) => Number(c.id) === Number(coffeeId)
      ) as Coffee;
      return {
        ...coffee,
        count,
      };
    });
  }

  const sumTotalPrice = (filteredCoffees: Coffee[]) => {
    const initialValue = 0;

    const sumItems = filteredCoffees.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.price * currentValue.count,
      initialValue
    );

    return sumItems;
  };

  return (
    <AppContext.Provider
      value={{
        shoppingCartItems,
        setShoppingCartItems,
        handleProduct,
        removeProduct,
        filterCoffeesById,
        sumTotalPrice,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
