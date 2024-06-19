import { DefaultResultFailure, Result } from "../../utils/Result";
import { CoffeeModel } from "../model/CoffeeModel";

export type CoffeeRepositoryListAllRes = Promise<
  Result<CoffeeModel[], DefaultResultFailure | { code: "SERIALIZATION" }>
>;

export interface CoffeeRepository {
  listAll(): CoffeeRepositoryListAllRes;
}
