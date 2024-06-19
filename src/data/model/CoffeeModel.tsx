import { z } from "zod";

export const CoffeeModel = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  count: z.number(),

  coffeeImgUrl: z.string(),
  tag: z.string(),
});
export type CoffeeModel = z.infer<typeof CoffeeModel>;
