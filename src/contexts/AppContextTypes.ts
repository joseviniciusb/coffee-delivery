export interface AppContextType {
    shoppingCartItems: { coffeeId: number; count: number }[];
    setShoppingCartItems: React.Dispatch<React.SetStateAction<{ coffeeId: number; count: number }[]>>;
  }