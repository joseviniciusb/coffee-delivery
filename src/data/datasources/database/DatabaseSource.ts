import { CoffeeModel } from "../../model/CoffeeModel";

export type listAllCoffeesRes = Promise<CoffeeModel[] | null>;

export interface DatabaseDatasource {
  listAllCoffees(): listAllCoffeesRes;
}
