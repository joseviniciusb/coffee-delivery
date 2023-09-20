export type CartItem = { coffeeId: number; count: number }

export interface AppContextType {
    shoppingCartItems: CartItem[];
    setShoppingCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
    handleProduct: (id:number, increment:number) => void;
    removeProduct: (index: number) => void;
  }