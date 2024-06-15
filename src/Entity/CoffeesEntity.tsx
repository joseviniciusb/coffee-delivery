// src/components/Product.js

import { CoffeeType } from "../types/Coffee";

interface CoffeeProps {
  coffee: CoffeeType;
}

const Coffee: React.FC<CoffeeProps> = ({ coffee }) => {
  return (
    <div className="product">
      <h2>{coffee.name}</h2>
      <p>{coffee.description}</p>
      <p>Price: ${coffee.price}</p>
    </div>
  );
};

export default Coffee;
