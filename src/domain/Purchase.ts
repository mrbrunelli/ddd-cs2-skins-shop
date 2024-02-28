import { Price } from "./Price";
import { Skin } from "./Skin";

export class Purchase {
  constructor(
    readonly skin: Skin,
    readonly quantity: number,
    readonly totalPrice: Price,
    readonly purchaseDate: Date
  ) {}
}
