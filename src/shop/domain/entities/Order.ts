import { Customer } from "./Customer";
import { OrderItem } from "./OrderItem";

export class Order {
  constructor(
    readonly id: string,
    private items: OrderItem[] = [],
    private customer: Customer,
    readonly finishedAt: Date = new Date()
  ) {}

  total(): number {
    return parseFloat(this.items.reduce((acc, item) => acc + item.skin.finalPrice() * item.quantity, 0).toFixed(2))
  }

  getItems(): OrderItem[] {
    return this.items
  }
}
