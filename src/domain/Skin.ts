import { Price } from "./Price";

export class Skin {
  constructor(
    readonly id: string,
    readonly name: string,
    private readonly price: Price,
    readonly description: string,
    readonly float: number
  ) {}

  getPrice() {
    return this.price.getAmount();
  }
}
