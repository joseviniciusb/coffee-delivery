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
}
