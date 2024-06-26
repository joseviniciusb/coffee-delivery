export interface CoffeeType {
  id: number;
  image: string;
  tag: string | { tag1: string; tag2: string };
  name: string;
  description: string;
  price: number;
  count?: number;
}
