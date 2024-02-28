import { Price } from "./Price";
import { Purchase } from "./Purchase";
import { ShoppingCartItem } from "./ShoppingCartItem";

export class ShoppingCart {
  constructor(private items: ShoppingCartItem[] = []) {}

  addItem(item: ShoppingCartItem): void {
    this.items.push(item);
  }

  removeItem(item: ShoppingCartItem): void {
    const itemIndex = this.items.indexOf(item);
    if (itemIndex > -1) {
      this.items.splice(itemIndex, 1);
    }
  }

  private emptyShoppingCart() {
    this.items = [];
  }

  finalizePurchase(currency: string): Purchase[] {
    const purchases = this.items.map((item) => {
      const totalItemPrice = item.calculateAmount();
      const purchaseDate = new Date();
      return new Purchase(
        item.skin,
        item.quantity,
        new Price(totalItemPrice, currency),
        purchaseDate
      );
    });
    this.emptyShoppingCart();
    return purchases;
  }
}
