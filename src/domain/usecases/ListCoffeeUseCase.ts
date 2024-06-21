import { CoffeeRepository } from "../../data/repositories/CoffeeRepository";

import { DefaultResultFailure, Result } from "../../utils/Result";
import { Coffee } from "../entities/Coffee";

type Res = Result<Coffee[], DefaultResultFailure>;

export class ListCoffeeUseCase {
  constructor(private coffeeRepository: CoffeeRepository) {}

  async execute() {
    const { result } = await (async () => {
      return await this.coffeeRepository.listAll();
    })();

    if (result.type === "FAILURE") {
      return Result.Failure({ code: "UNKNOWN" });
    }

    const coffees = result.payload;

    return Result.Success(coffees.map((coffee) => Coffee.fromModel(coffee)));
  }
}
