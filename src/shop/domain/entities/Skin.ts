import { Price } from "../vos/Price";

export class Skin {
  constructor(
    readonly id: string,
    public name: string,
    public description: string,
    public float: number,
    private price: Price,
    public discountPercentage: number = 0
  ) {}

  finalPrice(): number {
    return this.price.value - (this.price.value * this.discountPercentage) / 100;
  }
}
