import { Skin } from "./Skin";

export class ShoppingCartItem {
  constructor(readonly skin: Skin, readonly quantity: number) {}

  calculateAmount(): number {
    return this.skin.getPrice() * this.quantity;
  }
}
