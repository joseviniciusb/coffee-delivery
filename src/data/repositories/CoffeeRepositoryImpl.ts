import { Result } from "../../utils/Result";
import { DatabaseDatasource } from "../datasources/database/DataBaseSource";
import {
  CoffeeRepositoryListAllRes,
  CoffeeRepository,
} from "./CoffeeRepository";

export class CoffeeRepositoryImpl implements CoffeeRepository {
  constructor(private datasource: DatabaseDatasource) {}

  async listAll(): CoffeeRepositoryListAllRes {
    const coffees = await this.datasource.listAllCoffees();

    if (!coffees) {
      return Result.Failure({ code: "SERIALIZATION" });
    }

    return Result.Success(coffees);
  }
}
