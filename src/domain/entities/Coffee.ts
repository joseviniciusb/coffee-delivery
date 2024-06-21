import { CoffeeModel } from "../../data/model/CoffeeModel";

export class Coffee {
  id: string;
  name: string;
  description: string;
  price: number;
  count: number;
  image: string;
  tag: string;

  constructor(
    id: string,
    name: string,
    description: string,
    price: number,
    count: number,
    image: string,
    tag: string
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.count = count;
    this.image = image;
    this.tag = tag;
  }

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getDescription(): string {
    return this.description;
  }

  getPrice(): number {
    return this.price;
  }

  getCount(): number {
    return this.count;
  }

  getImage(): string {
    return this.image;
  }

  getTag(): string {
    return this.tag;
  }

  static fromModel(model: CoffeeModel): Coffee {
    const entity = new Coffee();
    entity.id = model.id;

    entity.description = "";
    entity.price = 1;
    entity.count = 1;
    entity.image = "image";
    entity.tag = "tag";

    console.log(entity);

    return entity;
  }
}
